export default (sequelize, DataTypes) => {
    const hotels = sequelize.define('hotels', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            visible: {
                type: DataTypes.BOOLEAN
            },
            createdAt:{
                type:DataTypes.STRING,
                field:"created_at"
            },
            updatedAt:{
                type:DataTypes.STRING,
                field:"updated_at"
            }
        }, {
            tableName: 'hotels',
            timestamps: false
        }
    )
    return hotels;
}