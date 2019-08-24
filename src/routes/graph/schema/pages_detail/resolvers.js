import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';

export async function list(parent, { section_id, language }, _, __) {
    try {
        let query = {
            where:{
                section_id,
                language
            }
        };
        const data = await models.pages_detail.findAndCountAll(query);
        return {
            data:data.rows,
            count:data.count
        }
    } catch (e) {
        console.log({ e })
    }
}

export async function update(parent, { id, language, content }){
    try {
        let query = {
            language, content
        };
        const data = await models.pages_detail.update(query, {
            where: {
                id
            }
        });
        return {
            error: false,
            message:"succes"
        }
    } catch (e) {
        console.log({ e })
    }
}

export async function insert(parent, section){
    try {
        const data = await models.pages_detail.create(section);
        return {
            error: false,
            message:"succes"
        }
    } catch (e) {
        console.log({ e })
    }
}