export default (sequelize, DataTypes) => {
    const orders = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'order_id',
            autoIncrement: true
        },
        total_amount: {
            type: DataTypes.DECIMAL
        },
        created_on: {
            type: DataTypes.DATE
        },
        shipped_on: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.INTEGER
        },
        comments: {
            type: DataTypes.STRING
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        auth_code: {
            type: DataTypes.STRING
        },
        reference: {
            type: DataTypes.STRING
        },
        shipping_id: {
            type: DataTypes.INTEGER
        },
        tax_id: {
            type: DataTypes.INTEGER
        }
    }, {

            tableName: 'orders',
            timestamps: false
        })
    orders["associate"] = (models) => {
        models.orders.hasMany(models.order_detail, {
            foreignKey: 'order_id',
            targetKey: 'order_id'
        })
    }
    return orders;
}