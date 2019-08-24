export default (sequelize, DataTypes) => {
    const eventDays = sequelize.define('eventDays', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'event_days',
            timestamps: false
        }
    )
    return eventDays;
}