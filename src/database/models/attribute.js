export default (sequelize, DataTypes) => {
    const attribute = sequelize.define('attribute', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'attribute_id',
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'attribute',
            timestamps: false
        })

    return attribute;
}