export default (sequelize, DataTypes) => {
    const languages = sequelize.define('languages', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            iso2: {
                type: DataTypes.STRING,
                field: "iso_2"
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at"
            },
        }, {
            tableName: 'languages',
            timestamps: false
        }
    )
    return languages;
}