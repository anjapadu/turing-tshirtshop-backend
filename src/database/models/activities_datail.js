export default (sequelize, DataTypes) => {
    const activitiesDetail = sequelize.define('activitiesDetail', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            activityId: {
                type: DataTypes.INTEGER,
                field:"activity_id"
            },
            language: {
                type: DataTypes.STRING
            },
            titleSection: {
                type: DataTypes.STRING,
                field:'title_section'
            },
            title: {
                type: DataTypes.STRING,
                field:'title'
            },
            contentSection: {
                type: DataTypes.STRING,
                field:'content_section'
            }
        }, {
            tableName: 'activity_detail',
            timestamps: false
        }
    )
    return activitiesDetail;
}