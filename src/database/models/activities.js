export default (sequelize, DataTypes) => {
    const activities = sequelize.define('activities', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            hour: {
                type: DataTypes.STRING
            },
            dayId: {
                type: DataTypes.STRING,
                field:'day_id'
            },
            status:{
                type:DataTypes.BOOLEAN
            }
        }, {
            tableName: 'activities',
            timestamps: false
        }
    )
    return activities;
}