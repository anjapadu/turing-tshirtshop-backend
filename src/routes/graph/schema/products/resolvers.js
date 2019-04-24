import models from '@models';
import cache from '../../../../lib/cache-service';
import { selectionSetWithCount } from '../../../../lib/utils'

export async function fetchProducts(parent, data, _, __) {
    try {
        /**
         * Custom subqueries to get color and size of each product.
         */
        let subQuerySize = "(SELECT  group_concat(UPPER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 1 group by av.attribute_id)"
        let subQueryColor = "(SELECT  group_concat(LOWER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 2 group by av.attribute_id)"
        /**
         * Args
         */
        const {
            categoryId,
            departmentId,
            paging,
            id,
            notId,
            autoComplete
        } = data;
        /**
         * Custom attributes aliases and subqueries
         */
        let customAttributes = {
            categoryName: [models.Sequelize.literal("`categories`.`name`"), "categoryName"],
            categoryId: [models.Sequelize.literal("`categories`.`category_id`"), "categoryId"],
            departmentId: [models.Sequelize.literal("`categories->department`.`department_id`"), "departmentId"],
            departmentName: [models.Sequelize.literal("`categories->department`.`name`"), "departmentName"],
            colors: [models.Sequelize.literal(subQueryColor), "colors"],
            sizes: [models.Sequelize.literal(subQuerySize), "sizes"]
        };
        let _selectionSet = selectionSetWithCount(__, customAttributes);

        if (autoComplete) {
            const response = await models.products.findAndCountAll({
                attributes: _selectionSet,
                /**
                 * Custom where if there is a filter active (categoryId, departmentid).
                 */
                where: models.Sequelize.literal(`
                ${`\`product\`.\`display\` IN (0, 1,2,3,4)`}   
                ${id ? ` AND \`product\`.\`product_id\` = ${id}` : ''}
                ${departmentId ? ` AND \`categories->department\`.\`department_id\` = ${departmentId}` : ''}
                ${categoryId ? ` AND categories.category_id = ${categoryId}` : ''}
                ${notId ? ` AND \`product\`.\`product_id\` != ${notId}` : ''}
                ${autoComplete ? ` AND \`product\`.\`name\` LIKE '%${autoComplete}%'` : ''}
                `),
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
            return {
                data: response.rows,
                count: response.count
            }
        }
        /**
         * Cache by product or by request
         */
        let cacheKey = id ? `product_${id}` : `product_c${categoryId || ''}_d${departmentId || ''}_o${paging ? paging.offset : ''}`;
        const response = await cache.get(cacheKey, () => {
            return models.products.findAndCountAll({
                attributes: _selectionSet,
                /**
                 * Custom where if there is a filter active (categoryId, departmentid).
                 */
                where: models.Sequelize.literal(`
                ${`\`product\`.\`display\` IN (0, 1,2,3,4)`}   
                ${id ? ` AND \`product\`.\`product_id\` = ${id}` : ''}
                ${departmentId ? ` AND \`categories->department\`.\`department_id\` = ${departmentId}` : ''}
                ${categoryId ? ` AND categories.category_id = ${categoryId}` : ''}
                ${notId ? ` AND \`product\`.\`product_id\` != ${notId}` : ''}
                ${autoComplete ? ` AND \`product\`.\`name\` LIKE '%${autoComplete}%'` : ''}
                `),
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