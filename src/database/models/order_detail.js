export default (sequelize, DataTypes) => {
    const order_detail = sequelize.define('order_detail', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'item_id',
            autoIncrement: true
        },
        order_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        attributes: {
            type: DataTypes.STRING
        },
        product_name: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        unit_cost: {
            type: DataTypes.DECIMAL
        }
    }, {

            tableName: 'orders',
            timestamps: false
        })
    order_detail["associate"] = (models) => {
        models.order_detail.belongsTo(models.orders)
    }
    return order_detail;
}