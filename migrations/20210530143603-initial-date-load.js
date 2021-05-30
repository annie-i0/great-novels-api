'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('authors', [{
      firstName: 'Bram',
      lastName: 'Stroker'
    }, {
      firstName: 'Oscar',
      lastName: 'Wilde'
    }, {
      firstName: 'Alice',
      lastName: 'Walker'
    }, {
      firstName: 'Leo',
      lastName: 'Tolstoy'
    }, {
      firstName: 'Charles',
      lastName: 'Dickens'
    }, {
      firstName: 'Arthur',
      lastName: 'Miller'
    }, {
      firstName: 'Alexander',
      lastName: 'Dumas'
    }, {
      firstName: 'Arthur Conan',
      lastName: 'Doyle'
    }, {
      firstName: 'Robert Louis"',
      lastName: 'Stevenson'
    }, {
      firstName: 'Fyodor',
      lastName: 'Dostoyevsky'
    }, {
      firstName: 'Agatha',
      lastName: 'Christie'
    }, {
      firstName: 'Ray',
      lastName: 'Bradbury'
    }, {
      firstName: 'George',
      lastName: 'Orwell'
    }, {
      firstName: 'H.G.',
      lastName: 'Wells'
    }, {
      firstName: 'Chinua',
      lastName: 'Achebe'

    }])

    await queryInterface.bulkInsert('novels', [{
      title: 'Dracula',
      authorId: 1
    }, {
      title: 'The Picture of Dorian Gray',
      authorId: 2
    }, {
      title: 'The Color Purple',
      authorId: 3
    }, {
      title: 'War and Peace',
      authorId: 4
    }, {
      title: 'A Tale of Two Cities',
      authorId: 5
    }, {
      title: 'The Crucible',
      authorId: 6
    }, {
      title: 'The Three Musketeers',
      authorId: 7
    }, {
      title: 'The Hound of the Baskervilles',
      authorId: 8
    }, {
      title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
      authorId: 9
    }, {
      title: 'Crime and Punishment',
      authorId: 10
    }, {
      title: 'Murder on the Orient Express',
      authorId: 11
    }, {
      title: 'Fahrenheit 451',
      authorId: 12
    }, {
      title: 'Animal Farm',
      authorId: 13
    }, {
      title: 'The Time Machine',
      authorId: 14
    }, {
      title: 'Things Fall Apart',
      authorId: 15
    }, {

    }])

    await queryInterface.bulkInsert('genres', [{
      name: 'Fiction'
    }, {
      name: 'Horror'
    }, {
      name: 'Fantasy'
    }, {
      name: 'Gothis'
    }, {
      name: 'Historical Fiction'
    }, {
      name: 'War'
    }, {
      name: 'Russian Literature'
    }, {
      name: 'Drama'
    }, {
      name: 'Plays'
    }, {
      name: 'Adventure'
    }, {
      name: 'French Literature'
    }, {
      name: 'Mystery'
    }, {
      name: 'Crime'
    }, {
      name: 'Thriller'
    }, {
      name: 'Science Fiction'
    }, {
      name: 'Horror'
    }, {
      name: 'Russian Literature'
    }, {
      name: 'Dystopia'
    }, {
      name: 'Time Travel'
    }, {
      name: 'African Literature'

    }])

    return queryInterface.bulkInsert('novelsGenres', [{
      novelId: 1,
      gereId: 1
    }, {
      novelId: 2,
      gereId: 2
    }, {
      novelId: 3,
      gereId: 3
    }, {
      novelId: 4,
      gereId: 4
    }, {
      novelId: 5,
      gereId: 5
    }, {
      novelId: 6,
      gereId: 6
    }, {
      novelId: 7,
      gereId: 7
    }, {
      novelId: 8,
      gereId: 8
    }, {
      novelId: 9,
      gereId: 9
    }, {
      novelId: 10,
      gereId: 10
    }, {
      novelId: 11,
      gereId: 11
    }, {
      novelId: 12,
      gereId: 12
    }, {
      novelId: 13,
      gereId: 13
    }, {
      novelId: 14,
      gereId: 144
    }, {
      novelId: 15,
      gereId: 15
    }, {

    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('authors')

    await queryInterface.bulkDelete('novels')

    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('novelsGenres')
  }
}

