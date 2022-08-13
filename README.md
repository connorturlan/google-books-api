# Google Books API

<img src="preview.png" height="500px" width="500px" />

<button style="border: 1px solid white; border-radius:5px; padding: 10px 20px; background-color:white;"><a href="https://connor-turlan.github.io/google-books-api/">View the Project</a></button>

## Setup

It is recomended to use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extention within VS Code. Other web hosting methods will work with this project also.

## MVP

Create a page that allows users to search for books
Page should include the following:

-   Header section introducing the page
-   Form containing a text input and a submit / search button
-   A grid of books

    Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules.
-   Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

Additionally:

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Goals

A search engine using the Google Books API.

## Known Issues

-   No currently known issues.

## Retrospective

## Future Plans

-   Rewrite the entire functionality of the project using React.js.

## Similar Projects

[Google Books API - React](https://github.com/Connor-Turlan/google-books-react)

-   A rewrite of the Google Books API project using the React.js framework.

## License

No license required.

## Contributions

Made by Connor Turlan 2022.
