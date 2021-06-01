const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll({
  })

  return response.send(authors)
}

const getAuthorsById = async (request, response) => {
  const { id } = request.params
  const authors = await models.Authors.findOne({
    where: { lastName: { lastName: {[ models.Op.like]:`%${lastName}%`},
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
})
  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorsById }
