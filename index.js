const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controller/authors')
const { getAllGenres, getGenreById} = require('./controller/genres')
const { getAllNovels, getNovelById} = require('./controller/novels')
// const products = require('./models/products')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/id:', getAuthorById)

app.get('/genres', getAllGenres)

app.get('/genres/id:', getGenreById)

app.get('/novels, getAllNovels)

app.get('/novels/id:', getNovelById)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1370, () => {
  console.log('Listening on port 1370...') // eslint-disable-line no-console
})
