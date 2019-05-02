export default (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'product_id',
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        discounted_price: {
            type: DataTypes.DECIMAL
        },
        image: {
            type: DataTypes.STRING
        },
        image_2: {
            type: DataTypes.STRING
        },
        thumbnail: {
            type: DataTypes.STRING
        },
        display: {
            type: DataTypes.SMALLINT
        }
    }, {

            tableName: 'product',
            timestamps: false
        })

    product["associate"] = (models) => {
        models.products.belongsToMany(models.categories, {
            through: models.product_category,
            foreignKey: 'product_id'
            // targetKey: 'category_id'
        })

        models.products.belongsToMany(models.attribute_value, {
            foreignKey: 'product_id',
            through: models.product_attribute
        })

        models.products.hasMany(models.product_attribute, {
            foreignKey: 'id'
        })
    }

    return product;
}