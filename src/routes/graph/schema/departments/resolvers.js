import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchDepartments() {
    // return cache.get('productList', () => {
    try {
        return await models.departments.findAll({
            include: [
                {
                    model: models.categories
                }
            ],
        });
    } catch (e) {
        console.log(e)
    }
}   