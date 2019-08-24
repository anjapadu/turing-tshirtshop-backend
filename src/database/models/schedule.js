export default (sequelize, DataTypes) => {
    const postDetail = sequelize.define('post_detail', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            postId:{
                type:DataTypes.INTEGER,
                field:"post_id"
            },
            title: {
                type: DataTypes.STRING
            },
            content: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING
            },
            language: {
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
        }, {
            tableName: 'post_detail',
            timestamps: false
        }
    )
    return postDetail;
}