export default (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'category_id',
            autoIncrement: true
        },
        department_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {

            tableName: 'category',
            timestamps: false
        })
    category["associate"] = (models) => {
        models.categories.belongsToMany(models.products, {
            through: models.product_category,
            foreignKey: 'category_id'
        })
        models.categories.belongsTo(models.departments, {
            keyTarget: 'department_id',
            foreignKey: 'department_id'
        })
    }
    return category;
}