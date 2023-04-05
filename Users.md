[Back to Api Documentation Page](./ApiDocumentation.md)  

# Users
- [Get all users](#get-all-users)  
- [Get user by id](#get-user-by-id)  
- [Get own profile](#get-own-profile)  
- [Register new user](#register-new-user) 
- [User login](#user-login) 
- [Update own profile](#update-own-profile) 
- [Change own password](#change-own-password) 
- [Update user](#update-user)  

## Get All Users
`[GET] api/v1/users?page=1&pageSize=25`  

- Response  
```
[
  {
    "id": 3,
    "firstName": "Kate",
    "lastName": "Stewart",
    "userName": "TheBrig",
    "email": "k.stewart@unit.co.uk",
    "roles": [
      "Customer"
    ]
  }
]
``` 
[Back to top](#users) 

## Get User by Id
`[GET] api/v1/users/{id}`  

- Response  
```
{
  "id": 2,
  "firstName": "John",
  "lastName": "Disco",
  "userName": "TheDoctor",
  "email": "doctor@tardis.co.uk",
  "roles": [
    "Customer"
  ]
}
``` 
[Back to top](#users)  

## Get Own Profile
`[GET] api/v1/users/profile`  

- Response  
```
{
  "id": 1,
  "firstName": "Kimberly",
  "lastName": "Ruohio",
  "userName": "KimInTime",
  "email": "admin@mail.com",
  "roles": [
    "Admin"
  ]
}
``` 
[Back to top](#users)  

## Register New User
`[POST] api/v1/users/register`  

- Request  
```
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "user@example.com",
  "password": "string"
}
``` 
[Back to top](#users)  

## User Login
`[POST] api/v1/users/login`  

- Request  
```
{
  "email": "user@example.com",
  "password": "string"
}
```  

- Response
```
{
  "token": "string",
  "expiration": "2023-04-05T23:17:19.234663+03:00"
}
```  

- Authorization
```
'Authorization: Bearer jwtokenstring'
``` 
[Back to top](#users)  

## Update Own Profile
`[PUT] api/v1/users/profile/update`  

- Request  
```
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string"
}
```  
[Back to top](#users)  

## Change Own Password
`[PUT] api/v1/users/profile/update/password`  

- Request
```
{
  "oldPassword": "string",
  "newPassword": "string"
}
```  
[Back to top](#users)  

## Update User
`[PUT] api/v1/users/{id}/update`  

- Request
```
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string"
}
```  
[Back to top](#users)  

 