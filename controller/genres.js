const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.genres.findAll()

  return response.send(genres)
}


module.exports = { getAllGenres }
