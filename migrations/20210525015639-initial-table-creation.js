// 'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('novels', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false },
      authorId: { type: Sequelize.INTEGER, references: { model: 'Authors', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('novelsGenres', {
      genreId: { type: Sequelize.INTEGER, references: { model: 'Genres', key: 'id' } },
      novelId: { type: Sequelize.INTEGER, references: { model: 'Novels', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deletedAt: { type: Sequelize.DATE },
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors')

    await queryInterface.dropTable('novels')

    await queryInterface.dropTable('genres')

    return queryInterface.dropTable('novelsGenres')
  }
}
