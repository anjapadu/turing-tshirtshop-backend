export default (sequelize, DataTypes) => {
    const shipping_region = sequelize.define('shipping_region', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'shipping_region_id',
            autoIncrement: true
        },
        shipping_region: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'shipping_region',
            timestamps: false
        })
    shipping_region["associate"] = (models) => {
        models.shipping_region.belongsTo(models.customer, {
            foreignKey: 'shipping_region_id'
        });
    }
    return shipping_region;
}