DROP DATABASE IF EXISTS greatnovels;

CREATE DATABASE greatnovels;

CREATE USER 'greatnovels'@'localhost' IDENTIFIED BY 'password123!';

GRANT ALL ON greatnovels.* TO 'greatnovels'@'localhost';

USE greatnovels;

CREATE TABLE authors (
  id INT auto_increment,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE novels (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  authorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE novelsGenres (
  genreId INT,
  novelId INT, 
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY (genreId, novelId),
  FOREIGN KEY (genreId) REFERENCES genres(id)
);

INSERT INTO authors (firstName, lastName) 
VALUES 
("Bram", "Stroker"),
("Oscar", "Wilde"),
("Alice", "Walker"),
("Leo", "Tolstoy"),
("Charles", "Dickens"),
("Arthur", "Miller"),
("Alexander", "Dumas"),
("Arthur Conan", "Doyle"),
("Robert Louis", "Stevenson"),
("Fyodor", "Dostoyevsky"),
("Agatha", "Christie"),
("Ray", "Bradbury"),
("George", "Orwell"),
("H.G.", "Wells"),
("Chinua", "Achebe");

INSERT INTO novels (title, authorId) 
VALUES 
("Dracula", 1),
("The Picutre of Dorian Gray", 2),
("The Color Purple", 3),
("War and Peace", 4),
("A Tale of Two Cities", 5),
("The Crucible", 6),
("The Three Musketeers", 7),
("The Hound of the Baskervilles", 8),
("The Strange Case of Dr. Jekyll and Mr. Hyde", 9),
("Crime and Punishment", 10),
("Murder on the Orient Express", 11),
("Fahrenheit 451", 12),
("Animal Farm", 13),
("The Time Machine", 14),
("Things Fall Apart", 15);

INSERT INTO genres ( name ) 
VALUES 
("Fiction"),
("Horror"),
("Fantasy"),
("Gothic"),
("Historical Fiction"),
("War"),
("Russian Literature"),
("Drama"),
("Plays"),
("Adventure"), 
("French Literature"),
("Mystery"), 
("Crime"), 
("Thriller"),
("Science Fiction"), 
("Horror"),
("Russian Literature"),
("Dystopia"),
("Time Travel"),
("African Literature");

INSERT INTO novelsGenres (novelId, genreId) 
VALUES 
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 5),
(4, 1),
(4, 5),
(4, 6),
(4, 7),
(5, 1),
(5, 5),
(6, 1),
(6, 5),
(6, 8),
(6, 9),
(7, 1),
(7, 5),
(7, 10),
(7, 11),
(8, 1),
(8, 12),
(8, 13),
(8, 14),
(9, 1),
(9, 12),
(9, 15),
(9, 16),
(10, 1),
(10, 7),
(10, 12),
(11, 1),
(11, 12),
(12, 1),
(12, 15),
(12, 17),
(13, 1),
(13, 15),
(13, 17),
(14, 1),
(14, 15),
(14, 18),
(15, 1),
(15, 5), 
(15, 19);


SELECT * from authors;
SELECT * from novels;
SELECT * from genres;
SELECT * from novelsGenres;