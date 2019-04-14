export default (sequelize, DataTypes) => {
    const department = sequelize.define('department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'department_id',
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'department',
            timestamps: false
        })
    department["associate"] = (models) => {
        models.departments.hasMany(models.categories, {
            foreignKey: 'department_id',
            targetKey: 'department_id'
        })
    }
    return department;
}