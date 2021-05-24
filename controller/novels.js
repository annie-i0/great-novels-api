const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.novels.findAll()

  return response.send(novels)
}


module.exports = { getAllNovels }

