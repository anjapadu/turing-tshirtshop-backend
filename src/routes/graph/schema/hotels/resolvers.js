import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';

export async function list(parent, data, _, __) {
    try {
        let query = {
            raw:true,
            where:{
                visible:true
            }
        };
        const hotels = await models.hotels.findAll(query)
        return hotels
    } catch (e) {
        console.log({ e })
    }
}

export async function add(parent, data, _, __){
    try{
        let query = data;
        data.visible = true;
        data.createdAt = moment().format('YYYY-MM-DD- HH:mm:ss');
        data.updatedAt = moment().format('YYYY-MM-DD- HH:mm:ss');
        const hotels = await models.hotels.create(query);
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
        data.updatedAt = moment().format('YYYY-MM-DD- HH:mm:ss');
        const hotels = await models.hotels.update(data, {
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
        let data = {};
        data.visible = false;
        data.updatedAt = moment().format('YYYY-MM-DD- HH:mm:ss');
        const hotels = await models.hotels.update(data, {
            where:{
                id :ids
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