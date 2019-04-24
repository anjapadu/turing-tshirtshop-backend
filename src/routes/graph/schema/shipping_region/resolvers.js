import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchShippingRegion() {
    try {
        return await models.shipping_region.findAll({
            include: [
                {
                    model: models.shipping,
                    as: "shipping"
                }
            ],
            order: [
                ["id", "ASC"]
            ]
        })
    } catch (e) {
        console.log(e)
    }
}