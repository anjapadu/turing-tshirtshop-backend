export default (sequelize, DataTypes) => {
    const product_category = sequelize.define('product_category', {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {

            tableName: 'product_category',
            timestamps: false
        })
        
    return product_category;
}