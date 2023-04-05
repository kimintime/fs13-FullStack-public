[Back Main to Api Documentation Page](./ApiDocumentation.md)  

# Authors
- [Get all authors](#get-all-authors)
- [Get authors by id](#get-authors-by-id)
- [Add new author](#add-new-author)
- [Update author](#update-author)
- [Delete author](#delete-author)

## Get All Authors
`[GET] api/v1/authors?page=1&pageSize=25`  

- Response
```
[
  {
    "firstName": "Walter",
    "lastName": "Farley",
    "id": 2
  },
  {
    "firstName": "Anna",
    "lastName": "Sewell",
    "id": 3
  },
  {
    "firstName": "Gail Carson",
    "lastName": "Levine",
    "id": 4
  },
  {
    "firstName": "Charlotte",
    "lastName": "Brontë",
    "id": 5
  }
]
```   
[Back to top](#authors)  

## Get Authors By Id
`[GET] api/v1/authors/{id}`  

- Response
```
{
  "firstName": "Anna",
  "lastName": "Sewell",
  "id": 3
}
```  
[Back to top](#authors)   

## Add New Author
`[POST] api/v1/authors`  

- Request  
```
{
  "firstName": "string",
  "lastName": "string"
}
```  
[Back to top](#authors)  

## Update Author
`[PUT] api/v1/authors/{id}`  

- Request
```
{
  "firstName": "string",
  "lastName": "string"
}
``` 
[Back to top](#authors)  

## Delete Author
`[DELETE] api/v1/authors/{id}`  

[Back to top](#authors)