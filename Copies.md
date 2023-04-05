[Back Main to Api Documentation Page](./ApiDocumentation.md)  

# Copies
- [Get all copies](#get-all-copies)
- [Get copies by id](#get-copies-by-id)
- [Add new copy](#add-new-copy)
- [Update copy](#update-copy)
- [Delete copy](#delete-copy)

## Get All Copies
`[GET] api/v1/copies?page=1&pageSize=25` 

- Response  
```
[
  {
    "isAvailable": true,
    "publisher": {
      "publisherName": "Random House",
      "id": 1
    },
    "title": "The Black Stallion",
    "id": 1
  },
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
  },
  {
    "isAvailable": true,
    "publisher": {
      "publisherName": "Penguin Classics",
      "id": 3
    },
    "title": "Jane Eyre",
    "id": 4
  }
]
```  
[Back to top](#copies)  

## Get Copies By Id
`[GET] api/v1/copies/{id}`  

- Response  
```
{
  "isAvailable": false,
  "publisher": {
    "publisherName": "Scholastic Paperbacks",
    "id": 2
  },
  "title": "Black Beauty",
  "id": 2
}
```  
[Back to top](#copies)  

## Add New Copy
`[POST] api/v1/copies` 

- Request   
```
{
  "bookId": 0,
  "publisherId": 0
}
```  
[Back to top](#copies)  

## Update Copy
`[PUT] api/v1/copies/{id}`  

- Request  
```
{
  "bookId": 0,
  "publisherId": 0
}
```  
[Back to top](#copies)  

## Delete Copy
`[DELETE] api/v1/copies/{id}`  

[Back to top](#copies)