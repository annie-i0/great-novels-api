const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll()

  return response.send(novels)
}

const getNovelsById = async (request, response) => {
  const { id } = request.params
  const novels = await models.Novels.findOne({
    where: { id },
    include: [{
      model: models.Authors,
      include: [{ model: models.Genres }]
    }]
  })

  return novels
    ? response.send(novels)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsById }

