# Categories
- [Get all categories](#get-all-categories)
- [Get categories by id](#get-category-by-id)
- [Add new category](#add-new-category)
- [Update category](#update-category)
- [Delete category](#delete-category)

## Get All Categories
`[GET] api/v1/categories?page=1&pageSize=25`  

- Response  
```
[
  {
    "name": "children",
    "description": "Books suitable for children of all ages",
    "id": 1
  },
  {
    "name": "classics",
    "description": "Books that are timeless and of literary acclaim",
    "id": 4
  },
  {
    "name": "fiction",
    "description": "Original works not based on real events.",
    "id": 3
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