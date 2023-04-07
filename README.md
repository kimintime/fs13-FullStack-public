# Fullstack Project

![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.4-hotpink)
![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-brown)
![.NET Core](https://img.shields.io/badge/.NET%20Core-v.7-purple)
![EF Core](https://img.shields.io/badge/EF%20Core-v.7-cyan)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.14-drakblue)

* Frontend: SASS, TypeScript, React, Redux Toolkit
* Backend: ASP .NET Core, Entity Framework Core, PostgreSQL

## About
This project is a fullstack implementation of a library, from its database to its website. So far, only the backend is done, but as ever, watch this space for more information.

This project started as a group effort, planning a database schema and endpoints for a library database, and it would not have been possible without the continuing support of that original project group, who continued to help and support me through our individual projects, as well as our amazing instructor.

### Thanks to
- Jeremias Ryttäri [JeremiasRy](https://github.com/JeremiasRy)
- Luan (Nguyen Thanh) Le [ELNAUL99](https://github.com/ELNAUL99)
- Alia Nguyen [alikiny](https://github.com/alikiny)

## Backend

### Features
As the features of the Api will recommend the features of the website, the Api currently should support the following functionality:

- User
    - User Authentication and Authorization
    - User registration
    - Update profile
    - Change password
    - Assigned default role at registration as `Customer`
    - May view own loans     
    - Admin User:
        - Get all users (pagination)
        - Get user by id
        - Update user
        - Update and delete loans

- Book
    - Search book by title, author, publisher, or category
    - Get all (pagination)
        - Books
        - Authors
        - Categories
        - Publishers
        - Copies

    - Get by id:
        - Book
        - Category
        - Author
        - Copies

    - Admin Role
        -  Add, update and delete books, authors, categories, and publishers

### Structure
The database was based on this original model, although there are differences. There is no need for a cart table, and reservations are now known as loans, and reviews have not been implemented. Breaking it down into plain English, many users can have one role, admin (or librarian), or customer. The database allows users to have many loans, and those loans are of copies of specific books. It is those specific copies that can be lent out to become loans. When a copy is on loan, it is marked as unavailable, and each user's loans are connected to their own profile. Publishers are connected to copies, rather than the books, as books often have many editions, and also more than one publisher. Books can also have more than one author and more than one category. 

![219979882-b295c08d-2ac5-4a7f-b05f-ceb173f48d28](https://user-images.githubusercontent.com/40215472/230119173-20c8ba29-b823-40e2-8742-0d9f46a10d89.png)

### Api
The Api documentation can be found [here](./ApiDocumentation.md). 

### File Structure
backend  
 ┣ Controllers  
 ┃ ┣ ApiControllerBase.cs  
 ┃ ┣ AuthorController.cs  
 ┃ ┣ BookController.cs  
 ┃ ┣ CategoryController.cs  
 ┃ ┣ CopyController.cs  
 ┃ ┣ CrudController.cs   
 ┃ ┣ LoanController.cs  
 ┃ ┣ PublisherController.cs  
 ┃ ┗ UserController.cs  
 ┣ DTOs  
 ┃ ┣ UserDTOs.cs  
 ┃ ┃ ┣ CredentialsDTO.cs  
 ┃ ┃ ┣ LoginResponseDTO.cs  
 ┃ ┃ ┣ RoleDTO.cs  
 ┃ ┃ ┣ UpdatePasswordDTO.cs  
 ┃ ┃ ┣ UserDTO.cs  
 ┃ ┃ ┣ UserRegResponseDTO.cs  
 ┃ ┃ ┣ UserRegistrationDTO.cs  
 ┃ ┃ ┗ UserUpdateDTO.cs  
 ┃ ┣ AddDTO.cs  
 ┃ ┣ AuthorDTO.cs  
 ┃ ┣ BaseDTO.cs  
 ┃ ┣ BookDTO.cs  
 ┃ ┣ CategoryDTO.cs  
 ┃ ┣ CopyDTO.cs  
 ┃ ┣ LoanDTO.cs  
 ┃ ┣ LoanResponseDTO.cs  
 ┃ ┗ PublisherDTO.cs  
 ┣ Db  
 ┃ ┣ AppDbContext.cs  
 ┃ ┣ AppDbContextSaveChangesInterceptor.cs  
 ┃ ┣ BookConfigExtensions.cs  
 ┃ ┣ LoanConfigExtensions.cs  
 ┃ ┗ UserConfigExtensions.cs  
 ┣ Models  
 ┃ ┣ Author.cs  
 ┃ ┣ BaseModel.cs  
 ┃ ┣ Book.cs  
 ┃ ┣ Category.cs  
 ┃ ┣ Copy.cs  
 ┃ ┣ Loan.cs  
 ┃ ┣ Publisher.cs  
 ┃ ┗ User.cs  
 ┣ Services  
 ┃ ┣ Impl  
 ┃ ┃ ┣ AuthorService.cs  
 ┃ ┃ ┣ BookService.cs  
 ┃ ┃ ┣ CategoryService.cs  
 ┃ ┃ ┣ CopyService.cs  
 ┃ ┃ ┣ DbCrudService.cs  
 ┃ ┃ ┣ JWTokenService.cs  
 ┃ ┃ ┣ LoanService.cs  
 ┃ ┃ ┣ PublisherService.cs  
 ┃ ┃ ┣ RoleService.cs  
 ┃ ┃ ┗ UserService.cs  
 ┃ ┣ IBookService.cs  
 ┃ ┣ ICrudService.cs  
 ┃ ┣ IJWTokenService.cs  
 ┃ ┣ ILoanService.cs  
 ┃ ┣ IRoleService.cs  
 ┃ ┗ IUserService.cs  
 ┣ Program.cs  
 ┣ backend.csproj  


### Setting Up the `Backend`

1. Create the `appsettings.json` file in the root of folder `Backend`. You can refer to the content of file `example.json`
2. Required to run the Library backend:
    * .Net Core (this project is version 7)
    * dotnet ef commandline tools
    * PostgresSQL
   
3. You can change .NET Core version to be compatible with your local machine in the `backend.csproj´ file
4. Run the command `dotnet restore` to restore all the required libraries, then `dotnet run` to start the server. 
5. Add a new migration by running `dotnet ef migrations add <InitialMigration>` and then `dotnet ef database update` to create the new database.
6. The project is using Swagger UI to run the Api, so you have the option to navigate to localhost:5001/swagger/index.html to test out the Api. Note that the port depends on your own configuration of the server settings in the Program.cs file. 

