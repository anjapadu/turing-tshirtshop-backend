import models from '@models';
import cache from '../../../../lib/cache-service';

export async function fetchMaxMinPrice(parent, data, _, __) {
    try {
        const max = await models.products.max('price');
        const min = await models.products.min('price');
        return {
            min,
            max
        }
    } catch (e) {
        console.log({ e })
    }
}

export async function fetchProducts(parent, data, _, __) {
    try {
        /**
         * Args
         */
        const {
            categoryId,
            departmentId,
            paging,
            id,
            notId,
            autoComplete,
            color,
            size,
            minPrice,
            maxPrice
        } = data;
        /**
         * Cache by product or by request
         */
        let cacheKey = id ? `product_${id}` : `product_c${categoryId || ''}_d${departmentId || ''}_o${paging ? paging.offset : ''}_ac${autoComplete || ''}_c${color || ''}_s${size || ''}`;
        /**
         * If is filtered by color or size use custom query. 
         * (UPDATE TO CUSTOM RAW QUERY TO SUPORT COLOR / SIZE FILTER)
         */
        return await cache.get(cacheKey, async () => {
            let insideQuery = `SELECT p.*, p.product_id id,
                c.category_id categoryId,
                c.department_id departmentId,
                (SELECT  group_concat(UPPER(av.value)) sizes from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = p.product_id and a.attribute_id = 1 group by av.attribute_id) sizes,
                (SELECT  group_concat(LOWER(av.value)) colors   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = p.product_id and a.attribute_id = 2 group by av.attribute_id) colors 
                FROM product p
                    JOIN product_attribute pa ON p.product_id = pa.product_id 
                    JOIN attribute_value av ON av.attribute_value_id = pa.attribute_value_id 
                    JOIN product_category pc ON pc.product_id = p.product_id
                    JOIN category c ON c.category_id = pc.category_id
                WHERE p.display IN (0,1,2,3,4)
                    ${id ? `AND p.product_id = ${id}` : ''}
                    ${notId ? `AND p.product_id != ${notId}` : ''}    
                    ${categoryId ? `AND c.category_id = ${categoryId}` : ''}
                    ${departmentId ? `AND c.department_id = ${departmentId}` : ''}
                    ${autoComplete ? `AND (p.name like '%${autoComplete}%' OR p.description like '%${autoComplete}%')` : ''}
                    ${(minPrice || maxPrice) ? `
                        AND (
                            discounted_price = 0 AND price between ${minPrice} AND ${maxPrice} 
                                OR
                            discounted_price != 0 AND discounted_price between ${minPrice} AND ${maxPrice} )
                    ` : ''}
                    group by p.product_id`;

            let whereQuery = `WHERE  1 = 1 
                ${size ? `AND (products.sizes like '${size},%' OR products.sizes like '%,${size},%' OR products.sizes like '%,${size}')` : ''}
                ${color ? `AND (products.colors like '${color},%' OR products.colors like '%,${color},%' OR products.colors like '%,${color}')` : ''}
                order by products.product_id`;

            let dataQuery = `SELECT * from (
                        ${insideQuery}
                    ) products
                        ${color || size ? whereQuery : ''}
                        ${paging ? `limit ${paging.limit}` : ''}
                        ${paging ? `offset ${paging.offset || 0}` : ''}`;

            let countQuery = `SELECT COUNT(1) count from (
                        ${insideQuery}
                    ) products
                        ${color || size ? whereQuery : ''}
                    `;

            let countResponse = await models.sequelize.query(countQuery, {
                type: models.Sequelize.QueryTypes.SELECT
            })
            let productsResponse = await models.sequelize.query(dataQuery, {
                type: models.Sequelize.QueryTypes.SELECT
            })
            return {
                data: productsResponse,
                count: countResponse[0].count
            };
        })
    } catch (e) {
        console.log({ e })
    }
}   