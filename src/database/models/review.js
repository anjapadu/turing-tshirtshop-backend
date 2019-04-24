export default (sequelize, DataTypes) => {
    const review = sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'review_id',
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
        },
        product_id: {
            type: DataTypes.INTEGER,
        },
        review: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        created_on: {
            type: DataTypes.DATE,
        }
    }, {
            tableName: 'review',
            timestamps: false
        })
    review["associate"] = (models) => {
        models.review.hasOne(models.customer, {
            foreignKey: 'customer_id'
        })
        models.review.hasOne(models.products, {
            foreignKey: 'product_id'
        })
    }
    return review;
}