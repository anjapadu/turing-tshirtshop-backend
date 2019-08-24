import models from '@models';
import { Op } from 'sequelize'
import moment from 'moment';

export async function list(parent, parameters, _, __) {
    try {

        let query = {};
        const data = await models.pages.findAndCountAll(query);
        console.log(data)
        return {
            data:data.rows,
            count:data.count
        }
    } catch (e) {
        console.log({ e })
    }
}