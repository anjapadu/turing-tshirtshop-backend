import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchDepartments() {
    // return cache.get('productList', () => {
    const a = await models.departments.findAll({
        include: [
            {
                model: models.categories,
                as: 'categories', include: [
                    {
                        model: models.products,
                        as: 'products'
                    }
                ]
            }
        ]
    });
    // console.log(a);
    return a;
    // })
}   