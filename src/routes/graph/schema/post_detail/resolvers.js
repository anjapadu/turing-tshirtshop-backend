import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';
import fs from 'fs-extra'
import path from 'path'

export async function list(parent, { language, postId }, _, __) {
    try {
        let query = {};
        query.where={};
        if(language){
            query.where.language = language;
        }
        if(postId){
            query.where.postId = postId;
        }
        query.include = [{
            model: models.posts,
            where:{
                visible:true
            }
        }];
        const data = await models.postDetail.findAndCountAll(query);
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
        data.status = true;
        data.visible = true;
        data.createdAt = moment().format();
        data.updatedAt = moment().format();
        
        const postDetail = await models.postDetail.create(data);
        if(data.isNewImage){
            let base64Image  = data.rawImage.split(';base64,').pop();
            let pathLogo = `${postDetail.id}${data.language}${moment().format("hhmmss")}.jpg`
            await fs.writeFile(process.env.DIRIMAGE+"/posts/front/"+pathLogo, base64Image, {encoding: 'base64'}, (result) =>{})
            await models.postDetail.update({ image: pathLogo }, {
                where:{
                    id:postDetail.id
                }
            })
        }
        return {
            error:false,
            message:"succes"
        }
    } catch(e) {
        console.log({ e });
    }
}

export async function update(parent, data, _, __){
    try{
        data.updatedAt = moment().format();
        if(data.isNewImage){
            let base64Image  = data.rawImage.split(';base64,').pop();
            let pathLogo = `${data.id}${data.language}${moment().format("hhmmss")}.jpg`
            await fs.writeFile(process.env.DIRIMAGE+"/posts/front/"+pathLogo, base64Image, {encoding: 'base64'}, (result) =>{})
            data.image =  pathLogo;
        }
        const postDetail = await models.postDetail.update(data, {
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