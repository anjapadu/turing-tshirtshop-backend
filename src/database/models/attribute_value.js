export default (sequelize, DataTypes) => {
    const attribute_value = sequelize.define('attribute_value', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'attribute_value_id',
            autoIncrement: true
        },
        attribute_id: {
            type: DataTypes.INTEGER
        },
        value: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'attribute_value',
            timestamps: false
        })

    return attribute_value;
}