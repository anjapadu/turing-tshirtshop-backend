import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchProducts(parent, data, _, __) {
    try {
        const { paging } = data;
        //Custom subqueries to get color and size of each product.
        let subQuerySize = "(SELECT  group_concat(UPPER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 1 group by av.attribute_id)"
        let subQueryColor = "(SELECT  group_concat(LOWER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 2 group by av.attribute_id)"
        //Args
        const {
            categoryId,
            departmentId
        } = data;
        //Custom attributes aliases and subqueries
        let customAttributes = {
            categoryName: [models.Sequelize.literal("`categories`.`name`"), "categoryName"],
            categoryId: [models.Sequelize.literal("`categories`.`category_id`"), "categoryId"],
            departmentId: [models.Sequelize.literal("`categories->department`.`department_id`"), "departmentId"],
            departmentName: [models.Sequelize.literal("`categories->department`.`name`"), "departmentName"],
            colors: [models.Sequelize.literal(subQueryColor), "colors"],
            sizes: [models.Sequelize.literal(subQuerySize), "sizes"]
        };
        let selectionSet = __.selectionSetWithCount(customAttributes);

        const response = await cache.get(`product_c${categoryId || ''}_d${departmentId || ''}_o${paging.offset}`, () => {
            return models.products.findAndCountAll({
                attributes: selectionSet,
                //Custom where if there is a filter active (categoryId, departmentid).
                ...(categoryId || departmentId ? {
                    where: models.Sequelize.literal(`
                ${categoryId ? `categories.category_id = ${categoryId}` : ''}
                ${categoryId && departmentId ? ' AND ' : ''}
                ${departmentId ? `\`categories->department\`.\`department_id\` = ${departmentId}` : ''}`)
                } : {}),
                subQuery: false,
                include: [
                    {
                        nested: false,
                        model: models.categories,
                        attributes: [
                            "name",
                            "category_id"
                        ],
                        as: 'categories',
                        include: [
                            {
                                nested: false,
                                as: "department",
                                attributes: ["name", "department_id"],
                                model: models.departments,

                            }
                        ]
                    }
                ],
                limit: paging ? paging.limit : null,
                offset: paging ? paging.offset : null,
                raw: true,
            });
        })
        return {
            data: response.rows,
            count: response.count
        }
    } catch (e) {
        console.log({ e })
    }
}   