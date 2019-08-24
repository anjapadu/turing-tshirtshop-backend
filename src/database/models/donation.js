export default (sequelize, DataTypes) => {
    const donation = sequelize.define('donation', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            url: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN
            }
        }, {
            tableName: 'donation',
            timestamps: false
        }
    )
    return donation;
}