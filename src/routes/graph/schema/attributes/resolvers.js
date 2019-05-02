import models from '@models';


export async function fetchAttributes(parent, data, _, __) {
    try {
        const response = await models.attribute.findAll({
            attributes: [
                [models.Sequelize.literal("LOWER(GROUP_CONCAT(`attribute_values`.`value` SEPARATOR ','))"), "attributeValues"],
                'name'
            ],
            include: [{
                model: models.attribute_value
            }],
            group: ['`attribute`.`attribute_id`'],
            raw: true
        })
        return response;
    } catch (e) {
        console.log('Error fetchAttributes', e)
    }
}