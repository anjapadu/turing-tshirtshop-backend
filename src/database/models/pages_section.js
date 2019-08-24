export default (sequelize, DataTypes) => {
    const pages_section = sequelize.define('pages_section', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            page_id: {
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'pages_section',
            timestamps: false
        }
    )
    pages_section["associate"] = (models) => {
        models.pages_section.hasMany(models.pages_detail, {
            foreignKey: 'page_id',
            source:'id'
        })
    }
    return pages_section;
}
// +---------+--------------+------+-----+---------+----------------+
// | Field   | Type         | Null | Key | Default | Extra          |
// +---------+--------------+------+-----+---------+----------------+
// | id      | int(11)      | NO   | PRI | NULL    | auto_increment |
// | page_id | int(11)      | YES  |     | NULL    |                |
// | name    | varchar(255) | YES  |     | NULL    |                |
// +---------+--------------+------+-----+---------+----------------+