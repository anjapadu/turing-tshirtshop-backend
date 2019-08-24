import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';
import Hashids from "hashids"
import fs from 'fs-extra'
export async function list(parent, { filter, page, limit }, _, __) {
    try {
        let offset = limit * (page - 1);
        let query = {
            limit,
            offset,
            where:{
                title : {
                    [Op.like]: '%'+filter+ '%'
                },
                visible:true
            }
        };
        const data = await models.posts.findAndCountAll(query)
        return {
            data:data.rows,
            count:data.count
        }
    } catch (e) {
        console.log({ e })
    }
}

export async function add(parent, data, _, __){
    try{
        var hashids = new Hashids("bethle", 10);
        let query = data;
        query.url = transformTextToURL(data.title)
        query.visible = true;
        const post = await models.posts.create(query);
        let toUpdate = {};
        toUpdate.id = post.id;
        toUpdate.image = post.id+"-"+hashids.encode(post.id)+".jpg";
        update(true, toUpdate);
        return {
            error:false,
            message:"succes"
        }
    } catch(e) {
        console.log({ e });
    }
}

function transformTextToURL(textURL){
    textURL = textURL.toLowerCase();
    textURL = textURL.replace(/ñ/g, 'n');
    textURL = textURL.replace(/ /g, '-');
    textURL = encodeURI(textURL);
    return textURL;
}

export async function update(parent, data, _, __){
    try{
        data.updateAt = moment().format();
        const posts = await models.posts.update(data, {
            where: {
                id:data.id
            }
        });
        return {
            error: false,
            message:"succes"
        }
    } catch(e){
        console.log({ e });
    }
}

export async function remove(parent, { ids }, _, __){
    try{
        let query = {
            where:{
                id :{
                    [Op.or]: ids
                }
            }
        };
        const posts = await models.posts.update(
            {
                visible:false
            },
            query
        );
        return {
            error: false,
            message:"succes"
        }
    } catch(e){
        console.log({ e });
    }
}

export async function saveImage(parent, { rawImage, encode }, _, __){
    try{
        let base64Image  = rawImage.split(';base64,').pop();
        let pathLogo = `${encode}-${moment().format("hhmmss")}.jpg`
        console.log("test", encode, pathLogo)
        await fs.writeFile(process.env.DIRIMAGE+"/posts/gallery/"+pathLogo, base64Image, {encoding: 'base64'}, (result) =>{})
        return{
            message:pathLogo,
            error:false
        }
    }catch(e){
        console.log({ e });
    }
}