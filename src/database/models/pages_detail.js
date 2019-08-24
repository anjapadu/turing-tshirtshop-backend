export default (sequelize, DataTypes) => {
    const pages_detail = sequelize.define('pages_detail', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            page_id: {
                type: DataTypes.INTEGER
            },
            content: {
                type: DataTypes.STRING
            },
            language: {
                type: DataTypes.STRING
            },
            section_id: {
                type: DataTypes.INTEGER
            }
        }, {
            tableName: 'pages_detail',
            timestamps: false
        }
    )

    pages_detail["associate"] = (models) => {
        models.pages_detail.belongsTo(models.pages_section, {
            foreignKey: 'page_id',
            source:'id'
        })
    }
    return pages_detail;
}
// +------------+--------------+------+-----+---------+----------------+
// | Field      | Type         | Null | Key | Default | Extra          |
// +------------+--------------+------+-----+---------+----------------+
// | id         | int(11)      | NO   | PRI | NULL    | auto_increment |
// | page_id    | int(11)      | YES  |     | NULL    |                |
// | content    | varchar(600) | YES  |     | NULL    |                |
// | language   | varchar(255) | YES  |     | NULL    |                |
// | section_id | int(11)      | YES  |     | NULL    |                |
// +------------+--------------+------+-----+---------+----------------+