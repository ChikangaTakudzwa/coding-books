![alt text](image URL)
# Overview

"Coding Books" is a web application that allows users to view and add coding books to a database. The app includes a table that displays entries in the database, including the author, title, price, and year of publication. Users can also use a form to add a new book to the database. The app uses JavaScript's Fetch API to interact with a Django Rest Framework API that serves requests.

The user interface for "Coding Books" is live and hosted on GitHub Pages.

## Features

View a list of coding books in a table format.
Add new books to the database using a form.
Interact with a Django Rest Framework API using JavaScript's Fetch API.

## Requirements

A modern web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge.
A stable internet connection.
The Django Rest Framework API that serves requests to the "Coding Books" app.

## Getting Started

###### To get started with "Coding Books," follow these steps:

Clone the repository from GitHub.
Install any necessary dependencies.
Set up the Django Rest Framework API if it's not already running.
Open the "index.html" file in a web browser.

## Usage

#### View Books
###### To view the list of coding books, follow these steps:

Open the live user interface at https://your-username.github.io/coding-books.
The list of coding books will be displayed in a table format.

#### Add a Book

###### To add a new book to the database, follow these steps:

Open the live user interface at https://your-username.github.io/coding-books.
Click on the "Add a Book" button.
Fill in the required fields (author, title, price, and year of publication).
Click the "Submit" button to add the book to the database.

#### Interact with the API

###### To interact with the Django Rest Framework API, use JavaScript's Fetch API. The API provides the following endpoints:

GET /books - Returns a list of all books in the database.
POST /books - Adds a new book to the database.
You can use these endpoints to retrieve and add books to the database programmatically.

## API Documentation

#### GET /books

###### Returns a list of all books in the database.

Request
Method: GET
URL: /books
Response
Status Code: 200 OK

Body: A JSON array of book objects, each with the following properties:

id (integer): The ID of the book.
author (string): The author of the book.
title (string): The title of the book.
price (number): The price of the book.
year (integer): The year the book was published.

#### POST /books

Adds a new book to the database.

Request
Method: POST

URL: /books

Headers:

Content-Type: application/json
Body: A JSON object representing the new book, with the following properties:

author (string, required): The author of the book.
title (string, required): The title of the book.
price (number, required): The price of the book.
year (integer, required): The year the book was published.
Response
Status Code: 201 Created
Body: A JSON object representing the newly created book, with the same properties as in the GET /books response.
