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

## Frontend
-Link: [Library Project](https://kitlibrary.netlify.app/)

### Note! Admin Features!
The bulk of the website is found in its admin features. To test, login to:

```
Email: admin@mail.com
Password: admin123
```
### Features
The library site features a collection of books and allows the user to browse by:
- Author
- Category
- Title search
- Publisher
- Individual copies

The user is able to:
- Add books to cart
- Keep the cart contents between logins
- Checkout books
- See their loans
- Edit their profile

Admin functionality:
- Add books
- Add author and category to books
	- Books may have many authors
	- Books may have many categories
- Add authors, categories, publishers, and copies
	- Each copy of the same book may have a different publishers
- Edit and delete books, authors, categories, publishers, and copies
- Process loans and returns
- Edit users

The library also features a notification system that should work throughout the site.

## How to use
### Registration and Login
Welcome to the library! In order to get in, you’ll need to register to create an account. Registration is easy and secure, simply click the ´Register´ button.

<img width="1440" alt="login" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/2967be80-5978-445c-9685-93d95a0077bc">

<img width="1440" alt="registration" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/f7042449-8613-430c-8042-ba8feceebde2">

You may have also noticed the notification, informing you of admin login. I invite everyone to test drive the entire site, both as customer and admin. As an admin, you get to be the librarian. More on that later.

<img width="585" alt="admin_access" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/c69893d2-6251-4bc1-9eed-8c2dd3cb78ea">

After registration, you’re redirected to sign-in, after which you should be directed to the homepage.

#### Note!
- On first load, the site may be very slow, please just wait after seeing the `Logging in…` notification. If login was successful, you’ll eventually see the homepage with the successful login notification at the bottom.

<img width="327" alt="login_success" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/abb66f0a-fb7e-4ed3-a68e-26f7f0b1d77d">

- Login is good for 60 minutes, so if you’ve been on the site that long, and start getting errors, log back in.

### Navigation bar
Throughout the site, you’ll be able to access features from the navigation bar:
- Home: Takes you back to the homepage
- Cart: Displays items in your cart
- Profile: Click here to view and edit your profile, and see your loans
- Books: Allows you to browse books by author, category, publisher, and individual copies, as well as access this help page.

<img width="1440" alt="navbar" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/37070db5-37ea-4190-b363-2962c04b3f3d">

### Homepage
On the homepage you can see the collection of books. Click on a given book to see its full description, or feel free to add it to your cart directly. If no copies are available, then you will not be able to add that book to check out that book.

To control how many results to view per page, select the number of results you’d like to view per page from the dropdown at the bottom of the screen.

The homepage also contains links to the categories, authors, and publishers pages. 

<img width="1440" alt="homepage" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/1e07b58f-9b69-4750-837a-e2db451ca7c9">

<img width="1440" alt="pagination" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/0ad88006-e850-4942-8365-9c76a09ee1c5">

<img width="1440" alt="pagination_result" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/ac552c23-b818-404f-88c0-da85156bf0ef">

#### Sort bar
The sort bar allows you to sort the books by author, title, or availability, as well as search books by title. The backspace icon in the search field clears the input, and selecting the magnifying glass on an empty search shows all results.

<img width="1440" alt="sortbar" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/c6490e17-949e-450d-a482-645dc7df3d88">

#### Note!
Customers may only check out one copy per book. 

<img width="1440" alt="added_to_cart" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/0ac8e4bb-224f-43c9-bdbe-6f21aafb4282">

<img width="1440" alt="not_available" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/43e09e65-fbe6-4c7f-9d75-68c786d90430">

<img width="1440" alt="alert_added_to_cart" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/22f9a241-8b49-4866-90f1-312345469745">

<img width="1440" alt="bookpage_added_to_cart_alert" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/3f2d5790-f1b5-4c95-b583-a734a9ff628d">

### Book page
Each book has a page containing more information - the authors, publishers, its description, and categories, and how many are currently available, and can be added to the cart by selecting `Add to Cart`. 

<img width="1440" alt="Screenshot 2023-06-30 at 13 08 38" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/fcef8d44-8889-4008-aa4c-0b0ab3fd7dac">

### Browse Books 
Each table is sortable by selecting the arrows, and features the same pagination options as the homepage.

<img width="770" alt="table sort" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/ed48f1b1-1327-4cdc-bf39-b55bc64aa0a3">

#### Browse by Categories
On the categories page, you can see the list of categories and their descriptions. Click on a category to see all books in that category. Books of course have many categories, so can appear in multiple categories.

<img width="1440" alt="categories" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/0d11f88b-a65d-42c8-ad47-bf7228745649">

<img width="1440" alt="books_by_category" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/c8772bdf-85b3-4abd-9ca7-156574acca96">

The listing of books by category works just like the homepage. Select a given book for more information. Note that the table is sortable by title, author, and copies available.

#### Browse by Author
On the authors page, you can also sort the list. Click on an author to see their books. Books can have many authors, so can appear under multiple authors.

<img width="1440" alt="authors" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/4dafc9ce-aafa-4107-8752-330443186c05">

<img width="1440" alt="books_by_author" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/26393569-e5dc-499d-a5d2-053743bf0ac1">

The listing of books by author works just like the homepage. Select a given book for more information. Note that the table is sortable by title and copies available.

#### Browse by Publisher
On the publishers page, you can also sort the list. Click on a publisher to see their books. Books can have many publishers, so can appear under multiple publishers.

<img width="1440" alt="publishers" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/085de3c6-9e7c-4900-acc8-82dc8335f950">

<img width="1440" alt="books_by_publisher" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/4d525168-dad2-49e1-96a4-f0e4ac9e3d57">

The listing of books by publisher works just like the homepage. Select a given book for more information. Note that the table is sortable by title, author and copies available.

#### Browse by Copy
The copies page allows the user to see the status of given individual copies of books, and is sortable by title, publisher, and availability. For example, if the user wanted to see if a specific edition of a book was available. Clicking on the selection takes the user to a listing of books published by that publisher.

<img width="1440" alt="copies" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/fe9f7940-6e5f-45f3-815a-95e4558a16c5">

### Cart
The cart remembers the contents between login, and memory of the contents is cleared both on checkout and when the cart is emptied, which is done by selecting the `Empty Cart´ button.

<img width="1440" alt="cart" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/805ad2be-2703-454b-93b6-bc20fde7360f">

Select the ´-´ icon beside each item to remove it from the cart. When you’re happy with the cart contents, select the ´Place Order´ button to checkout the books. You’ll be redirected to your loans page, where you should see your new loan.

<img width="1440" alt="cart_selected" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/31c5908d-e84b-4eef-9aaa-91d01ed9da18">

### Loans
There are two ways to see your loans. You always see your list of loans after checking out books, and also from your own profile, by selecting the `Loans` button from your profile page. 

<img width="1440" alt="loans" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/5a64c906-a98f-4b15-999b-10fb8398ac9a">

The table is sortable by date loaned, book, date due, and returned status. Overdue books are shown in red, while returned books will have a checkmark in the Returned column. There’s also a sort menu, allowing you to view only loans whose return date has expired, or ongoing loans, and the default of all loans.

<img width="1440" alt="loan_sort" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/ab2f6f4c-caf6-46ed-aa6d-2fee11404d56">

### Profile
On the profile page, the user can view and update their username, name, email address, and password, as well as access their loans. Select the pencil icon to edit your profile. When you’re done editing your profile, select the `Update profile` button. To exit the edit form, simply select the pencil icon again, or leave the page without updating the profile.


<img width="1440" alt="profile" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/b3ac3338-8907-4267-b104-8d1ae9a60690">

<img width="1440" alt="edit_profile" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/27ef8252-b6c6-47d7-84ce-2865adaf3a69">

To update your password, you must enter your current password, and then the new password. Select the eye icons to show the password. If they’re the same, the site will alert you.

<img width="1440" alt="password_alert" src="https://github.com/kimintime/fs13-FullStack-public/assets/40215472/e393e875-027a-4dcb-92b5-ee05779e6c18">

And finally, when you wish to logout, simply click the `Logout` button.


## Backend
- Link: [Library Backend](https://kitbackend-library.azurewebsites.net)

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

---

### Api
The Api documentation can be found [here](./ApiDocumentation.md).

---

### Future Plans
- Unit Testing

## Update!
The backend now includes error handling and logger middleware. The updated file structure is below. 

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
 ┣ Helpers  
 ┃ ┗ ServiceException.cs  
 ┣ Middlewares  
 ┃ ┣ ErrorHandlerMiddleware.cs  
 ┃ ┗ LoggerMiddleware.cs  
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
 ┣ appsettings.json  
 ┣ backend.csproj  
 ┗ example.json  

---

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

