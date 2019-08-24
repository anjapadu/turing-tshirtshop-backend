export default (sequelize, DataTypes) => {
    const pages = sequelize.define('pages', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'pages',
            timestamps: false
        }
    )
    return pages;
}
// +-------+--------------+------+-----+---------+----------------+
// | Field | Type         | Null | Key | Default | Extra          |
// +-------+--------------+------+-----+---------+----------------+
// | id    | int(11)      | NO   | PRI | NULL    | auto_increment |
// | name  | varchar(255) | YES  |     | NULL    |                |
// +-------+--------------+------+-----+---------+----------------+