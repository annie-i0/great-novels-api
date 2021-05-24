const express = require('express')
const { getAllAuthors, getAuthorsById } = require('./controller/authors')
const { getAllGenres, getGenresById } = require('./controller/genres')
const { getAllNovels, getNovelsById } = require('./controller/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/id:', getAuthorsById)

app.get('/genres', getAllGenres)

app.get('/genres/id:', getGenresById)

app.get('/novels', getAllNovels)

app.get('/novels/id:', getNovelsById)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1370, () => {
  console.log('Listening on port 1370...') // eslint-disable-line no-console
})
