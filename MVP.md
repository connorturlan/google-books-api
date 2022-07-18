# Google Books API Search Engine

## Outline

This project will require you to use both DOM manipulation and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

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

## Bonus (optional, but highly recommended):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Useful Resources:

-   [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
-   [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
-   [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
-   [Download Postman](https://www.postman.com/downloads/)


{
  "kind": "books#volume",
  "id": "sD1bzgEACAAJ",
  "etag": "bycJqMYX++A",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/sD1bzgEACAAJ",
  "volumeInfo": {
    "title": "C# Programming: From Problem Analysis to Program Design",
    "authors": [
      "Barbara Doyle"
    ],
    "publisher": "Cengage Learning",
    "publishedDate": "2015-06-30",
    "description": "Respected author Dr. Barbara Doyle admirably balances programming principles and concepts with practical coding skill to create a strong professional foundation for beginning programmers in her latest edition of C# PROGRAMMING: FROM PROBLEM ANALYSIS TO PROGRAM DESIGN. This 5th edition’s straightforward approach and understandable vocabulary make it easy for readers to grasp new programming concepts without distraction. The book introduces a variety of fundamental programming concepts, from data types and expressions to arrays and collections, all using the latest version of today’s popular C# language. Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1285856872"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781285856872"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 1088,
    "printType": "BOOK",
    "categories": [
      "Computers"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=sD1bzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=sD1bzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=sD1bzgEACAAJ&dq=programming&hl=&cd=10&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=sD1bzgEACAAJ&dq=programming&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/C_Programming_From_Problem_Analysis_to_P.html?hl=&id=sD1bzgEACAAJ"
  },
  "saleInfo": {
    "country": "AU",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=sD1bzgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {
    "textSnippet": "The book introduces a variety of fundamental programming concepts, from data types and expressions to arrays and collections, all using the latest version of today’s popular C# language."
  }
}