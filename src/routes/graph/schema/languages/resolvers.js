import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';

export async function list(parent, data, _, __) {
    try {
        let query = {
            raw:true,
            where:{
                status:true
            }
        };
        const languages = await models.languages.findAll(query)
        console.log(languages)
        return languages
    } catch (e) {
        console.log({ e })
    }
}

export async function add(parent, data, _, __){
    try{
        let query = data;
        const languages = await models.languages.create(query);
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
        data.updateAt = moment().format();
        const languages = await models.languages.update(data, {
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
        const languages = await models.languages.destroy(query);
        return {
            error: false,
            message:"succes"
        }
    } catch(e){
        console.log({ e });
    }
}