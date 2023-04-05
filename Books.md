# Books
## Get all books
- Request
`[GET] /api/v1/books?page=1&pageSize=25`

- Response
```[
  {
    "title": "The Black Stallion",
    "description": "Published originally in 1941, this book is about a young boy, Alec Ramsay who finds a wild black stallion at a small Arabian port on the Red Sea. Between the black stallion and young boy, a strange understanding grew that you lead them through untold dangers as they journeyed to America. Nor could Alec understand that his adventures with the black stallion would capture the interest of an entire nation.",
    "categories": [
      {
        "name": "children",
        "description": "Books suitable for children of all ages",
        "id": 1
      },
      {
        "name": "fiction",
        "description": "Original works not based on real events.",
        "id": 3
      },
      {
        "name": "classics",
        "description": "Books that are timeless and of literary acclaim",
        "id": 4
      }
    ],
    "authors": [
      {
        "firstName": "Walter",
        "lastName": "Farley",
        "id": 2
      }
    ],
    "copies": [
      {
        "isAvailable": true,
        "publisher": {
          "publisherName": "Random House",
          "id": 1
        },
        "title": "The Black Stallion",
        "id": 1
      }
    ],
    "copiesAvailable": 1,
    "id": 1
  }
]```

## Get book by id
- Request
`[GET] v1/api/books/{id}`

- Response
```{
  "title": "Black Beauty",
  "description": "As a young horse, Black Beauty is well-loved and happy. But when his owner is forced to sell him, his life changes drastically. He has many new owners, some of them cruel and some of them kind. All he needs is someone to love him again...Whether pulling an elegant carriage or a ramshackle cab, Black Beauty tries to live as best he can. This is his amazing story, told as only he could tell it.",
  "categories": [
    {
      "name": "children",
      "description": "Books suitable for children of all ages",
      "id": 1
    },
    {
      "name": "fiction",
      "description": "Original works not based on real events.",
      "id": 3
    },
    {
      "name": "classics",
      "description": "Books that are timeless and of literary acclaim",
      "id": 4
    }
  ],
  "authors": [
    {
      "firstName": "Anna",
      "lastName": "Sewell",
      "id": 3
    },
    {
      "firstName": "Gail Carson",
      "lastName": "Levine",
      "id": 4
    }
  ],
  "copies": [
    {
      "isAvailable": false,
      "publisher": {
        "publisherName": "Scholastic Paperbacks",
        "id": 2
      },
      "title": "Black Beauty",
      "id": 2
    },
    {
      "isAvailable": true,
      "publisher": {
        "publisherName": "Penguin Classics",
        "id": 3
      },
      "title": "Black Beauty",
      "id": 3
    }
  ],
  "copiesAvailable": 1,
  "id": 3
}```

## Book search
- Request
`[GET] api/v1/books/search`

    - By Title
    `[GET] api/v1/books/search?title={string}`

    - By Author
    `[GET] api/v1/books/search?author={id}`

    - By Category
    `[GET] api/v1/books/search?category={id}`

    - By Publisher
    `[GET] api/v1/books/search?publisher={id}`

    - By Title, Author, Category, and Publisher
    `[GET] api/v1/books/search?category={id}&author={id}&title={string}&publisher={id}`

- Response
´´´[
  {
    "title": "Jane Eyre",
    "description": "Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?",
    "categories": [
      {
        "name": "fiction",
        "description": "Original works not based on real events.",
        "id": 3
      },
      {
        "name": "classics",
        "description": "Books that are timeless and of literary acclaim",
        "id": 4
      },
      {
        "name": "romance",
        "description": "Fiction centered around a theme of love.",
        "id": 5
      },
      {
        "name": "gothic",
        "description": "Fiction that includes characteristics of the uncanny or supernatural, often including romantic themes.",
        "id": 6
      }
    ],
    "authors": [
      {
        "firstName": "Charlotte",
        "lastName": "Brontë",
        "id": 5
      }
    ],
    "copies": [
      {
        "isAvailable": true,
        "publisher": {
          "publisherName": "Penguin Classics",
          "id": 3
        },
        "title": "Jane Eyre",
        "id": 4
      }
    ],
    "copiesAvailable": 1,
    "id": 5
  }
]´´´

## Update Book
- Request
`[PUT] api/v1/books/{id}`

```{
  "title": "string",
  "description": "string"
}```

## Add New Book
- Request
`[POST] api/v1/books`

```{
  "title": "string",
  "description": "string"
}```

## Add Author to Book
- Request
`[POST] api/v1/books/{id}/author`

```{
  "addId": 0
}```

## Add Category to Book
- Request
`[POST] api/v1/books/{id}/categories`

```{
  "addId": 0
}```

## Remove Author from Book
- Response
`[DELETE] api/v1/books/{id}/authors?authorId={id}`


## Remove Category from Book
- Response
`[DELETE] api/v1/books/{id}/categories?categoryId={id}`

## Delete Book
`[DELETE] api/v1/books/{id}










