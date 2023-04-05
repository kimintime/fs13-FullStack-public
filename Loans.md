[Back to Api Documentation Page](./ApiDocumentation.md)  

# Loans
- [Get all loans](#get-all-loans)  
- [Get loan by id](#get-loan-by-id)  
- [Get own loans](#get-own-loans)  
- [Add new loan](#add-new-loan)  
- [Update loan](#update-loan)  
- [Delete loan](#delete-loan)  

## Get All Loans
`[GET] api/v1/loans?page=1&pageSize=25`  

- By Ongoing  
```api/v1/loans?filter=OnGoing&page=1&pageSize=25``` 

- By Expired  
```api/v1/loans?filter=Expired&page=1&pageSize=25``` 

- Response  
```
[
  {
    "id": 4,
    "user": {
      "id": 1,
      "firstName": "Kimberly",
      "lastName": "Ruohio",
      "username": "KimInTime",
      "email": "admin@mail.com"
    },
    "copy": {
      "isAvailable": true,
      "publisher": {
        "publisherName": "Random House",
        "id": 1
      },
      "title": "The Black Stallion",
      "id": 1
    },
    "dateLoaned": "2023-04-03T10:37:20.629811",
    "dateDue": "2023-04-03T07:39:57.159",
    "returned": true
  }
]
``` 
[Back to top](#loans)  

## Get Loan by Id
`[GET] /api/v1/loans/{id}`  

- Response  
```
{
  "returned": false,
  "copy": {
    "isAvailable": false,
    "publisher": {
      "publisherName": "Scholastic Paperbacks",
      "id": 2
    },
    "title": "Black Beauty",
    "id": 2
  },
  "dateLoaned": "2023-04-03T10:33:51.474249",
  "dateDue": "2023-05-03T10:33:51.474485",
  "userInfo": {
    "id": 2,
    "firstName": "John",
    "lastName": "Disco",
    "username": "TheDoctor",
    "email": "doctor@tardis.co.uk"
  },
  "id": 3
}
``` 
[Back to top](#loans)  

## Get Own Loans
`[GET] api/v1/loans/user/loans`  

- By Ongoing  
```https://localhost:5001/api/v1/loans/user/loans?filter=OnGoing``` 

- By Expired  
```https://localhost:5001/api/v1/loans/user/loans?filter=Expired``` 

- Response  
```
[
  {
    "id": 4,
    "user": {
      "id": 1,
      "firstName": "Kimberly",
      "lastName": "Ruohio",
      "username": "KimInTime",
      "email": "admin@mail.com"
    },
    "copy": {
      "isAvailable": true,
      "publisher": {
        "publisherName": "Random House",
        "id": 1
      },
      "title": "The Black Stallion",
      "id": 1
    },
    "dateLoaned": "2023-04-03T10:37:20.629811",
    "dateDue": "2023-04-03T07:39:57.159",
    "returned": true
  }
]
``` 
[Back to top](#loans)  

## Add New Loan
`[POST] api/v1/loans`  

- Request
```
{
  "userId": 0,
  "copyId": 0,
  "dateDue": "2023-04-05T19:46:21.594Z",
  "returned": true
}
``` 
[Back to top](#loans)  

## Update Loan
`[PUT] api/v1/loans/{id}`  

- Request
```
{
  "userId": 0,
  "copyId": 0,
  "dateDue": "2023-04-05T19:49:47.608Z",
  "returned": true
}
``` 
[Back to top](#loans)  

## Delete Loan
`[DELETE] api/v1/loans/{id}`  

[Back to top](#loans)  
