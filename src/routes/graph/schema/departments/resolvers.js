import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchDepartments() {
    // return cache.get('productList', () => {
    return await models.departments.findAll({
        include: [
            {
                model: models.categories,
                as: 'categories',
                // include: [
                //     {
                //         attributes: [],
                //         model: models.products,
                //         as: 'products'
                //     }
                // ]
            }
        ]
    });
}   