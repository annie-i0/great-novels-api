const authors = (connection, Sequelize,) => {
  return connection.define('authors',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      yearIntroduced: { type: Sequelize.DATEONLY },
      manufacturerID: { type: Sequelize.INTEGER, references: { model: manufacturers, key: 'id' } },
    }, { paranoid: true })
}

module.exports = authors
