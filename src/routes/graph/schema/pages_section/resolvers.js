import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';

export async function list(parent, { page_id }, _, __) {
    try {
        let query = {
            where:{
                page_id
            }
        };
        const data = await models.pages_section.findAndCountAll(query);
        return {
            data:data.rows,
            count:data.count
        }
    } catch (e) {
        console.log({ e })
    }
}