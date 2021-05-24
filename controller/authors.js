const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.authors.findAll()

  return response.send(authors)
}

const getAuthorsById = async (request, response) => {
  const { id } = request.params
  const authors = await models.authors.findOne({
    where: { id },
    include: [{ model: models.authors.novels, include: [models.genres] }]
  })

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorsById }
