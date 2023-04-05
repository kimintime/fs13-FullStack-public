[Back to Api Documentation Page](./ApiDocumentation.md)  

# Categories
- [Get all categories](#get-all-categories)
- [Get category by id](#get-category-by-id)
- [Add new category](#add-new-category)
- [Update category](#update-category)
- [Delete category](#delete-category)

## Get All Categories
`[GET] api/v1/categories?page=1&pageSize=25`  

- Response  
```
[
  {
    "name": "gothic",
    "description": "Fiction that includes characteristics of the uncanny or supernatural, often including romantic themes.",
    "id": 6
  }
]
```  
[Back to top](#categories)  

## Get Category by Id
`[GET] api/v1/categories/{id}`  

- Response  
```
{
  "name": "fiction",
  "description": "Original works not based on real events.",
  "id": 3
}
```  
[Back to top](#categories)  

## Add New Category
`[POST] api/v1/categories`  

- Request  
```
{
  "name": "string",
  "description": "string"
}
```  
[Back to top](#categories)  

## Update Category
`[PUT] api/v1/categories/{id}`  

- Request  
```
{
  "name": "string",
  "description": "string"
}
```  
[Back to top](#categories)  

## Delete Category
`[DELETE] api/v1/categories/{id}`  

[Back to top](#categories)