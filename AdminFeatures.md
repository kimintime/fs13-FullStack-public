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

<admin navbar>

The admin container has a default state, but you can expand and collapse each of its menus as needed by clicking on each heading. The admin container can be closed by clicking its icon at the top right of the menu.

<admin container>

[Back](#table-of-contents)

## Adding a Book
Books are considered to be only the title and their description. Authors and categories are added separately, while publishers are added while creating a specific copy of the book. Copies are what the user is actually checking out. Let’s go through how to use the features by adding a book. 

Select `Book` from the `Add` menu:

<add book>

When you have the title and description you entered, select the `Add Book` button. Alternatively, you can simply close the window without saving by selecting the `Close` button.

When you add the book, you should see a success notification:

<success>

<new book>

[Back](#table-of-contents)

### Note!
If you receive an error, it’s likely because your description is too long, keep it to a small paragraph.

## Add Author
Our book is missing an author, and looking at the authors in our library, the book’s authors, John Doe and Jane Doe, are not in the database. Next, select `Author` from the `Add` menu. 

Note:
- First name
- Last name
- Only enter one author at a time.

<add author>

Like with adding a book, the `Add Author` adds the new author, while `Close` closes the window without saving. You will see a success notification to let you know the author was successfully added.

<success>

Here we see our new authors.

<new authors>

[Back](#table-of-contents)

## Add Category
Looking at the list of categories, it seems the categories for the new book don’t yet exist in the library. Adding a new category works just like adding a book, or author. Select `Category` from the `Add` menu, and add the categories. For our purposes, I will be adding test 1 and test 2. The `Category` window follows the same format as the others. Select `Add Category` to add the category, and `Close` to close without saving. You should see a success message after adding each category.

<add category>

<success>

<new categories>

[Back](#table-of-contents)

### Note!
Category names need to be less than 10 characters, and are not case sensitive. Category descriptions need to be no more than a few lines long. If you receive errors, try again with shortened names and descriptions.

## Add to Book
Now that we everything we need for the new book we added earlier, we can add them to that book. Select `Add to Book` to expand that menu. You should see `Author` and `Category`.

[Back](#table-of-contents)

### Author
The page to add an author to a book looks as pictured here. The links at the top are for you to select a book to add the authors to, and then to select the author to add to that book. Select the book added earlier by selecting the `Select Book` link.

<add author>

The book table allows you to search and sort in a manner that resembles the homepage. Once you select the book, the table closes.

<select book>

Next, select the `Select Author` link, to see a table of authors that can be sorted the same way as the main selection of authors. Select the first author to add to the book, authors are added one at a time. Once you select the author, the table closes, and you should see the form is filled in with the book and the author.

<select author>

<completed form>

To add the author to the book, select `Add Author to Book`. Otherwise you can select `Clear`  to clear your selection, or simply open each table again to choose a new selection. After adding the author, you should see a success notification:

<success>

Repeat the process to add the second author, notice how the form now shows current authors. You are not replacing that author, but adding to the list.

<second author>

[Back](#table-of-contents)

### Category
Adding a new category to a book works the exact same way. Select `Category` from the `Add to Book` menu, select the book you’d like to add a category to, and the category you’d like to add. As you add categories, you will see current categories you are adding to. You’re not replacing those categories, just adding to them. 

<add category to book>

As with adding an author to a book, you can `Clear` the fields if you’re not happy with your selection, or simply make new selections, using `Add Category to Book` to add the category to the book.

<category table>

<filled in category>

When you add a category, you should see the success notification.

<success>

[Back](#table-of-contents)

## Add Publisher
Our new book now has two authors, and two categories, as shown below. But there are no copies available. To add a copy, we need to assign that copy a publisher. The Test Book’s publisher isn’t yet listed, so let’s add a new publisher to the library first. Open the admin container, and select `Publisher` from the `Add` menu. Add the name of the publisher, and select `Add Publisher`. As before, selecting `Close` closes the window without saving.

<add publisher>

<success>

Here is the new publisher successfully added:

<new publisher>

[Back](#table-of-contents)

## Add Copy
Select `Copy` from the `Add` menu to add the copy to the inventory. As you can see, it has a familiar layout as adding an author or category to a book. Select the book you’d like to add a copy of, then add the publisher of that copy. The form is exactly as the others above. You can clear it, or simply select again. When you’re happy with your selection, select `Add Copy` to add the copy of the book.

<add copy>

<book table copy>

<publisher table copy>

And now we see our new book as two copies available, that’s because I added the Test Publisher twice, creating two copies of the book that can each be checked out. Our new book is now stocked in the library.

<book>

[Back](#table-of-contents)

## Edit Menu
The edit menu is where you go to edit and delete books, authors, categories, publishers and copies. Copies are automatically deleted when a book is deleted, and the count of copies for a given book is updated when a copy is removed.

### Edit books
It’s also possible to edit books. From the admin container, select `Book` from the `Edit` menu. The way you edit a book should look familiar.

<edit book>

Select `Select Book` to choose the book to edit, once you select the book, you can see a lot more options to editing a book:

<book form>

From here, you can edit the title and description, as well as delete individual authors and categories. The trash can at the top of the form allows you to delete the book. When you delete the book, the authors and categories will remain in the library. I would recommend leaving them there, as with a library, you’ll likely have a new book with those authors and categories.

<edited book>

<success>

<deleting book>

<success>

[Back](#table-of-contents)

#### Note!
Deleting authors and categories is instant. If you made a mistake, you’ll need to re-add those from the `Add to book` menu. The same warning goes for deleting the book, and deleting the book deletes its copies.

### Edit Author
Editing an author works much the same way. Select `Author` from the `Edit` menu, to edit the author’s name, or delete that author from the library.

<Edit author>

<selected author>

<author table>

As with the editing a book, deleting an author is instant. If you wish to re-add the author, you’ll need to do so from the `Add` menu.

[Back](#table-of-contents)

### Edit Category
The Edit Category page is also familiar. Select `Category` from the `Edit` menu, and select the category you wish to edit or delete. From there, you can edit the text, or delete the entire category. As previously, deleting is instant, so to re-add a category, you’ll need to do so from the `Add` menu.

<edit category>

<chosen category>

[Back](#table-of-contents)

### Edit Publisher
The Edit Publisher page follows the same logic as editing has worked thus far. Select `Publisher` from the `Edit` menu, and select the publisher you with to edit or delete. You can edit the name of the publisher, or delete them from the library. Deleting is instant, so to re-add a publisher, you’ll need to do so from the `Add` menu.

<edit publisher>

<chosen publisher>

[Back](#table-of-contents)

### Edit Copy
Editing a copy allows you to change the publisher for a specific copy of a book. Its layout is similar to all other edit functions thus far. Select `Copy` from the `Edit` menu, and select the copy of the book for which you’d like to change the publisher. Deleting a copy is instant, so to re-add the copy, you’ll need to do so from the `Add` menu.

<edit copy>

<chosen copy>

<result>

[Back](#table-of-contents)

## User Admin
The `User Admin`  menu is where you process loans and returns, and edit user information, and it follows the same layout as you’ve seen thus far with admin functions.

### Loans
Select `Loans` from the `User Admin` menu to look up a specific loan, and process its return, or to manually modify or delete it. Select the given loan by selecting `Select Loan` to see the sortable loan table.

<loans>

<selected loan>

Once you select a loan, the layout should be familiar. The `delete` icon allows you to instantly delete the loan, but right underneath that is where you process returns. Simply select the checkbox, and the loan will be returned once you select the `Update` button. When processing a return, you can optionally change the due date to show when the loan was returned. You may also manually adjust the due date for loans that have not yet been returned. The copies available of that book will automatically update.

<result>

[Back](#table-of-contents)

### User
Finally, select `User`  from the `User Admin` menu to edit a given user’s profile. Note that you do not have access to their password, and you may not delete a user. The layout of the form is familiar by now, select `Select User` to edit a given user’s profile.

<user>

<selected user>

<result>

[Back](#table-of-contents)