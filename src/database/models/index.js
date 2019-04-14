import Sequelize from 'sequelize';
import databaseConnection from '../connection'

import products from './product';
import categories from './category';
import departments from './department';
import product_category from './product_category';
import attribute from './attribute';
import attribute_value from './attribute_value';
import orders from './orders';
import order_detail from './order_detail';
import product_attribute from './product_attribute';

const models = {
    products: databaseConnection.import("products", products),
    categories: databaseConnection.import("categories", categories),
    departments: databaseConnection.import("departments", departments),
    product_category: databaseConnection.import("product_category", product_category),
    attribute: databaseConnection.import("attribute", attribute),
    attribute_value: databaseConnection.import("attribute_value", attribute_value),
    product_attribute: databaseConnection.import("product_attribute", product_attribute),
    orders: databaseConnection.import("orders", orders),
    order_detail: databaseConnection.import("order_detail", order_detail)
}


Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
})

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;