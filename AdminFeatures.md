# Admin Features

[Back to README](./README.md)

## Table of Contents
- [Adding a book](#adding-a-book)
    - [Note!](#note)
- [Add Author](#add-author)
- [Add Category](#add-category)
    - [Note!](#note-1)
- [Add to Book](#add-to-book)
    - [Author](#author)
    - [Category](#category)
- [Add Publisher](#add-publisher)
- [Add Copy](#add-copy)
- [Edit Menu](#edit-menu)
    - [Edit Books](#edit-books)
        - [Note!](#note-2)
    - [Edit Author](#edit-author)
    - [Edit Category](#edit-category)
    - [Edit Publisher](#edit-publisher)
    - [Edit Copy](#edit-copy)
- [User Admin](#user-admin)
    - [Loans](#loans)
    - [User](#user)


---

After logging in as admin, you’ll see a slight difference on the navbar. Clicking on the three horizontal lines that appear before the `Fake Library` title reveals the admin controls for maintaining the library.

<img width="1437" alt="Screenshot 2023-07-01 at 13 44 03" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/5e6bc171-5df1-40f1-9b10-ef85c0042af5">

The admin container has a default state, but you can expand and collapse each of its menus as needed by clicking on each heading. The admin container can be closed by clicking its icon at the top right of the menu.

<img width="1440" alt="Screenshot 2023-07-01 at 13 44 28" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/4ffb58dc-7d08-4774-8598-eff23856f95d">

[Back](#table-of-contents)

## Adding a Book
Books are considered to be only the title and their description. Authors and categories are added separately, while publishers are added while creating a specific copy of the book. Copies are what the user is actually checking out. Let’s go through how to use the features by adding a book. 

Select `Book` from the `Add` menu:

<img width="1440" alt="Screenshot 2023-07-01 at 13 56 20" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/153324a0-dd97-49d9-b37a-b21b058268f3">

When you have the title and description you entered, select the `Add Book` button. Alternatively, you can simply close the window without saving by selecting the `Close` button.

When you add the book, you should see a success notification:

<img width="282" alt="Screenshot 2023-07-01 at 14 05 33" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/ce6e2d01-fbcf-415c-94ce-bad58fc2ca36">

<img width="1440" alt="Screenshot 2023-07-01 at 14 06 00" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/f9ce8278-088b-4779-9e98-2cd6c6d6e30d">

[Back](#table-of-contents)

### Note!
If you receive an error, it’s likely because your description is too long, keep it to a small paragraph.

## Add Author
Our book is missing an author, and looking at the authors in our library, the book’s authors, John Doe and Jane Doe, are not in the database. Next, select `Author` from the `Add` menu. 

Note:
- First name
- Last name
- Only enter one author at a time.

<img width="1440" alt="Screenshot 2023-07-01 at 14 27 34" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/a5a64d34-3776-4bef-96b2-fa80789db94b">

Like with adding a book, the `Add Author` adds the new author, while `Close` closes the window without saving. You will see a success notification to let you know the author was successfully added.

Here we see our new authors.

<img width="1440" alt="Screenshot 2023-07-01 at 14 29 54" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/2be20394-809f-45c2-b247-17a2520f3b82">

[Back](#table-of-contents)

## Add Category
Looking at the list of categories, it seems the categories for the new book don’t yet exist in the library. Adding a new category works just like adding a book, or author. Select `Category` from the `Add` menu, and add the categories. For our purposes, I will be adding test 1 and test 2. The `Category` window follows the same format as the others. Select `Add Category` to add the category, and `Close` to close without saving. You should see a success message after adding each category.

<img width="1440" alt="Screenshot 2023-07-01 at 14 38 31" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/5247fd70-f528-4463-a057-e1bcc15e9e3f">

<img width="1440" alt="Screenshot 2023-07-01 at 14 40 00" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/578d22c9-4e24-4e34-8fa1-6d92cf10c9bb">

[Back](#table-of-contents)

### Note!
Category names need to be less than 10 characters, and are not case sensitive. Category descriptions need to be no more than a few lines long. If you receive errors, try again with shortened names and descriptions.

## Add to Book
Now that we everything we need for the new book we added earlier, we can add them to that book. Select `Add to Book` to expand that menu. You should see `Author` and `Category`.

[Back](#table-of-contents)

### Author
The page to add an author to a book looks as pictured here. The links at the top are for you to select a book to add the authors to, and then to select the author to add to that book. Select the book added earlier by selecting the `Select Book` link.

<img width="1440" alt="Screenshot 2023-07-01 at 14 42 35" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/4296a8e5-cca6-4872-a1b8-8a128d434168">

The book table allows you to search and sort in a manner that resembles the homepage. Once you select the book, the table closes.

<img width="1440" alt="Screenshot 2023-07-01 at 14 46 58" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/ec06728f-358b-445f-8e64-92fb957eccdd">

Next, select the `Select Author` link, to see a table of authors that can be sorted the same way as the main selection of authors. Select the first author to add to the book, authors are added one at a time. Once you select the author, the table closes, and you should see the form is filled in with the book and the author.

<img width="1440" alt="Screenshot 2023-07-01 at 14 49 38" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/3fc10c26-8ed4-4793-89f3-6adf099710bb">

To add the author to the book, select `Add Author to Book`. Otherwise you can select `Clear`  to clear your selection, or simply open each table again to choose a new selection. After adding the author, you should see a success notification:

<img width="1440" alt="Screenshot 2023-07-01 at 14 53 03" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/9ef5d1e7-772a-4cb2-8a52-a644e7d59dad">

Repeat the process to add the second author, notice how the form now shows current authors. You are not replacing that author, but adding to the list.

<img width="1440" alt="Screenshot 2023-07-01 at 14 54 54" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/db21c7f9-7dea-4c4c-a105-a5e1a2d36646">

[Back](#table-of-contents)

### Category
Adding a new category to a book works the exact same way. Select `Category` from the `Add to Book` menu, select the book you’d like to add a category to, and the category you’d like to add. As you add categories, you will see current categories you are adding to. You’re not replacing those categories, just adding to them. 

<img width="1440" alt="Screenshot 2023-07-01 at 14 58 12" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/2df98a28-0155-4a1c-9c83-344e99314c3f">

As with adding an author to a book, you can `Clear` the fields if you’re not happy with your selection, or simply make new selections, using `Add Category to Book` to add the category to the book. When you add a category, you should see the success notification.

<img width="1440" alt="Screenshot 2023-07-01 at 16 08 00" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/f718ef2f-ca0e-4740-a983-9a736cb3983c">

<img width="1440" alt="Screenshot 2023-07-01 at 16 08 40" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/bbb3b45d-bf84-4a26-a487-85a8b2481853">

<img width="1440" alt="Screenshot 2023-07-01 at 16 11 21" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/35d2de96-27a3-4ead-9330-8ef3dc5c3e5f">

[Back](#table-of-contents)

## Add Publisher
Our new book now has two authors, and two categories, as shown below. But there are no copies available. To add a copy, we need to assign that copy a publisher. The Test Book’s publisher isn’t yet listed, so let’s add a new publisher to the library first. Open the admin container, and select `Publisher` from the `Add` menu. Add the name of the publisher, and select `Add Publisher`. As before, selecting `Close` closes the window without saving.

<img width="1440" alt="Screenshot 2023-07-01 at 16 22 34" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/a71dadb3-6735-4db0-a2a1-675feb20bddf">

Here is the new publisher successfully added:

<img width="1440" alt="Screenshot 2023-07-01 at 16 25 01" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/cd3679a7-09b1-425d-a4c9-8c8f2e7bec17">

[Back](#table-of-contents)

## Add Copy
Select `Copy` from the `Add` menu to add the copy to the inventory. As you can see, it has a familiar layout as adding an author or category to a book. Select the book you’d like to add a copy of, then add the publisher of that copy. The form is exactly as the others above. You can clear it, or simply select again. When you’re happy with your selection, select `Add Copy` to add the copy of the book.

<img width="1440" alt="Screenshot 2023-07-01 at 16 31 39" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/5b00f04e-da5b-4844-8bd2-6006563eaf34">

<img width="1440" alt="Screenshot 2023-07-01 at 16 32 07" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/5b9d306a-29f9-4d33-ba36-018111c9cad6">

<img width="1440" alt="Screenshot 2023-07-01 at 16 33 03" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/9e94ef19-aa3f-4672-80a1-11bbefb67af6">

And now we see our new book as two copies available, that’s because I added the Test Publisher twice, creating two copies of the book that can each be checked out. Our new book is now stocked in the library.

<img width="1440" alt="Screenshot 2023-07-01 at 16 36 13" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/3fa695f4-7347-465d-a6d5-20cf447bd158">

[Back](#table-of-contents)

## Edit Menu
The edit menu is where you go to edit and delete books, authors, categories, publishers and copies. Copies are automatically deleted when a book is deleted, and the count of copies for a given book is updated when a copy is removed.

### Edit books
It’s also possible to edit books. From the admin container, select `Book` from the `Edit` menu. The way you edit a book should look familiar.

<img width="1440" alt="Screenshot 2023-07-01 at 16 40 34" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/177481b2-966d-4d54-b24d-59d7e31cef0c">

Select `Select Book` to choose the book to edit, once you select the book, you can see a lot more options to editing a book:

<img width="1440" alt="Screenshot 2023-07-01 at 16 43 21" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/8cdda318-2772-4d1a-9992-67fbae82006c">

From here, you can edit the title and description, as well as delete individual authors and categories. The trash can at the top of the form allows you to delete the book. When you delete the book, the authors and categories will remain in the library. I would recommend leaving them there, as with a library, you’ll likely have a new book with those authors and categories.

<img width="1440" alt="Screenshot 2023-07-01 at 16 45 19" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/6415275c-8a0f-46ed-9fe9-578fbba3998a">

<img width="1440" alt="Screenshot 2023-07-01 at 16 51 32" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/1d11321c-97cb-41a4-ba4c-b5ebe510d8de">

[Back](#table-of-contents)

#### Note!
Deleting authors and categories is instant. If you made a mistake, you’ll need to re-add those from the `Add to book` menu. The same warning goes for deleting the book, and deleting the book deletes its copies.

### Edit Author
Editing an author works much the same way. Select `Author` from the `Edit` menu, to edit the author’s name, or delete that author from the library.

<img width="1440" alt="Screenshot 2023-07-01 at 16 58 39" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/28608d26-5015-473a-aa6f-8967beb9ffda">

<img width="1440" alt="Screenshot 2023-07-01 at 17 01 23" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/b51efd63-93d0-4690-9f85-0071d92b05a9">

As with the editing a book, deleting an author is instant. If you wish to re-add the author, you’ll need to do so from the `Add` menu.

[Back](#table-of-contents)

### Edit Category
The Edit Category page is also familiar. Select `Category` from the `Edit` menu, and select the category you wish to edit or delete. From there, you can edit the text, or delete the entire category. As previously, deleting is instant, so to re-add a category, you’ll need to do so from the `Add` menu.

<img width="1440" alt="Screenshot 2023-07-14 at 18 09 22" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/f59d8fd3-948c-44e6-95b6-4cecc1977861">

[Back](#table-of-contents)

### Edit Publisher
The Edit Publisher page follows the same logic as editing has worked thus far. Select `Publisher` from the `Edit` menu, and select the publisher you with to edit or delete. You can edit the name of the publisher, or delete them from the library. Deleting is instant, so to re-add a publisher, you’ll need to do so from the `Add` menu.

<img width="1440" alt="Screenshot 2023-07-02 at 14 36 48" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/3536ae44-0699-48fb-9650-02e576e08e43">

[Back](#table-of-contents)

### Edit Copy
Editing a copy allows you to change the publisher for a specific copy of a book. Its layout is similar to all other edit functions thus far. Select `Copy` from the `Edit` menu, and select the copy of the book for which you’d like to change the publisher. Deleting a copy is instant, so to re-add the copy, you’ll need to do so from the `Add` menu.

<img width="1440" alt="Screenshot 2023-07-14 at 18 01 40" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/04521dad-19e3-4b63-b813-e4bd288dfe4f">

[Back](#table-of-contents)

## User Admin
The `User Admin`  menu is where you process loans and returns, and edit user information, and it follows the same layout as you’ve seen thus far with admin functions.

### Loans
Select `Loans` from the `User Admin` menu to look up a specific loan, and process its return, or to manually modify or delete it. Select the given loan by selecting `Select Loan` to see the sortable loan table.

<img width="1440" alt="Screenshot 2023-07-02 at 15 02 06" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/6a105409-493a-479d-adea-576223376a46">

<img width="1440" alt="Screenshot 2023-07-02 at 15 02 52" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/420db46d-8dc1-4752-9312-51d2382c1745">

Once you select a loan, the layout should be familiar. The `delete` icon allows you to instantly delete the loan, but right underneath that is where you process returns. Simply select the checkbox, and the loan will be returned once you select the `Update` button. When processing a return, you can optionally change the due date to show when the loan was returned. You may also manually adjust the due date for loans that have not yet been returned. The copies available of that book will automatically update.

<img width="1440" alt="Screenshot 2023-07-02 at 15 08 31" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/31add27a-0991-402c-a74b-b2f3c18c42a8">

[Back](#table-of-contents)

### User
Finally, select `User`  from the `User Admin` menu to edit a given user’s profile. Note that you do not have access to their password, and you may not delete a user. The layout of the form is familiar by now, select `Select User` to edit a given user’s profile.

<img width="1440" alt="Screenshot 2023-07-02 at 15 11 53" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/0355b467-5386-4b36-bfc4-0412d73f0803">

<img width="1440" alt="Screenshot 2023-07-02 at 15 13 12" src="https://github.com/kimintime/fs13-FullStack/assets/40215472/ae3c9cdd-8a1d-49bf-a96a-931f93c0ceff">

[Back](#table-of-contents)
