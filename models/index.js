const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelsGenresModel = require('./novelsGenres')


const connection = new Sequelize('greatnovels', 'greatnovels', 'password123!',
  { host: 'localhost', dialect: 'mysql' })

const Authors = authorsModel(connection, Sequelize)

const Genres = genresModel(connection, Sequelize)

const Novels = novelsModel(connection, Sequelize, Authors)

const novelsGenres = novelsGenresModel(connection, Sequelize, Genres, Novels)

// products.belongsTo(manufacturers)
Novels.hasMany(Genres)

module.exports = { Authors, Genres, Novels, novelsGenres }

//
