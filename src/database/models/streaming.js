export default (sequelize, DataTypes) => {
    const donation = sequelize.define('donation', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            linkStreaming: {
                type: DataTypes.STRING,
                field: "link_streaming"
            },
            language: {
                type: DataTypes.STRING
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at"
            }
        }, {
            tableName: 'donation',
            timestamps: false
        }
    )
    return donation;
}