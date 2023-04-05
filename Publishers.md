[Back to Api Documentation Page](./ApiDocumentation.md)  

# Publishers
- [Get all publishers](#get-all-publishers)
- [Get publishers by id](#get-publisher-by-id)
- [Add new publisher](#add-new-publisher)
- [Update publisher](#update-publisher)
- [Delete publisher](#delete-publisher)  

## Get All Publishers
`[GET] api/v1/publishers?page=1&pageSize=25`  

- Response  
```
[
  {
    "publisherName": "Penguin Classics",
    "id": 3
  }
]
``` 
[Back to top](#publishers)  

## Get Publisher by Id
`[GET] api/v1/publishers/{id}`  

- Response  
```
{
  "publisherName": "Scholastic Paperbacks",
  "id": 2
}
``` 
[Back to top](#publishers)  

## Add new Publisher
`[POST] api/v1/publishers`  

- Request    
```
{
  "publisherName": "string"
}
``` 
[Back to top](#publishers)  

## Update Publisher
`[PUT] api/v1/publishers`

- Request  
```
{
  "publisherName": "string"
}
``` 
[Back to top](#publishers)  

## Delete Publisher
`[DELETE] api/v1/publishers/{id}`  

[Back to top](#publishers)  
