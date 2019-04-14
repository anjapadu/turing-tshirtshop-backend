export default (sequelize, DataTypes) => {
    const customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'customer_id',
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        credit_card: {
            type: DataTypes.STRING
        },
        address_1: {
            type: DataTypes.STRING
        },
        address_2: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        region: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        shipping_region_id: {
            type: DataTypes.INTEGER
        },
        day_phone: {
            type: DataTypes.STRING
        },
        eve_phone: {
            type: DataTypes.STRING
        },
        mob_phone: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'customer',
            timestamps: false
        });

    customer["associate"] = (models) => {
        models.customer.hasOne(models.shipping_region,{
            foreignKey: 'shipping_region_id'
        })
    }

    return customer;
}