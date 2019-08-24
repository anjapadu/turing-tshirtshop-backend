export default (sequelize, DataTypes) => {
    const users = sequelize.define('users', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstname: {
                type: DataTypes.STRING
            },
            lastname: {
                type: DataTypes.STRING
            },
            username: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            lastLogin: {
                type: DataTypes.DATE,
                field:"last_login"
            },
            createdAt: {
                type: DataTypes.DATE,
                field:"created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                field:"updated_at"
            }
        }, {
            tableName: 'users',
            timestamps: false
        }
    )
    return users;
}