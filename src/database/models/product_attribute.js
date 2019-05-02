export default (sequelize, DataTypes) => {
    const product_attribute = sequelize.define('product_attribute', {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        attribute_value_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {

            tableName: 'product_attribute',
            timestamps: false
        })
    return product_attribute;
}   