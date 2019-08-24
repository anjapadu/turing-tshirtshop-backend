export default (sequelize, DataTypes) => {
    const posts = sequelize.define('posts', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            visible: {
                type: DataTypes.BOOLEAN
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "updated_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at"
            },
            type:{
                type: DataTypes.INTEGER
            }
        }, {
            tableName: 'posts',
            timestamps: false
        }
    )
    posts["associate"] = (models) => {
        models.posts.hasMany(models.postDetail, {
            foreignKey: 'postId',
            source:'id'
        })
    }
    return posts;
}