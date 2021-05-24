const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.genres.findAll()

  return response.send(genres)
}

const getGenresById = async (request, response) => {
  const { id } = request.params
  const genres = await models.genres.findOne({
    where: { id },
    include: [{ model: models.genres.novels, include: [models.author] }]
  })

  return genres
    ? response.send(genres)
    : response.sendStatus(404)
}


module.exports = { getAllGenres, getGenresById }
