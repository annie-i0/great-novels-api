const express = require('express')
const { getAllAuthors } = require('./controller/authors')
const { getAllGenres} = require('./controller/genres')
const { getAllNovels} = require('./controller/novels')
// const products = require('./models/products')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/genres', getAllGenres)

app.get('/novels, getAllNovels)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1370, () => {
  console.log('Listening on port 1370...') // eslint-disable-line no-console
})

