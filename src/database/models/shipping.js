export default (sequelize, DataTypes) => {
    const shipping = sequelize.define('shipping', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'shipping_id',
            autoIncrement: true
        },
        shipping_type: {
            type: DataTypes.STRING
        },
        shipping_cost: {
            type: DataTypes.DECIMAL
        },
        shipping_region_id: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'shipping',
            timestamps: false
        })
    return shipping;
}