import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import BookItem from './pages/BookItem'
import Protected from './components/Protected'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Loans from './pages/Loans'
import Authors from './pages/Authors'
import Categories from './pages/Categories'
import Publishers from './pages/Publishers'
import BooksByAuthor from './pages/BooksByAuthor'
import BooksByCategory from './pages/BooksByCategory'
import BooksByPublisher from './pages/BooksByPublisher'
import Copies from './pages/Copies'
import AddCopy from './pages/admin/AddCopy'
import AddAuthor from './pages/admin/AddAuthor'
import AddCategory from './pages/admin/AddCategory'
import EditAuthor from './pages/admin/EditAuthor'
import EditBook from './pages/admin/EditBook'
import EditCategory from './pages/admin/EditCategory'
import EditCopy from './pages/admin/EditCopy'
import EditPublisher from './pages/admin/EditPublisher'
import EditLoan from './pages/admin/EditLoan'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: (
            <Protected>
              <Home />
            </Protected>
          )
        },
        {
          path: "authors",
          element: (
            <Protected>
              <Authors />
            </Protected>
          )
        },
        {
          path: "categories",
          element: (
            <Protected>
              <Categories />
            </Protected>
          )
        },
        {
          path: "publishers",
          element: (
            <Protected>
              <Publishers />
            </Protected>
          )
        },
        {
          path: "copies",
          element: (
            <Protected>
              <Copies />
            </Protected>
          )
        },
        {
          path: "books/:id",
          element: (
            <Protected>
              <BookItem />
            </Protected>
          )
        },
        {
          path: "authors/:id/books",
          element: (
            <Protected>
              <BooksByAuthor />
            </Protected>
          )
        },
        {
          path: "categories/:id/books",
          element: (
            <Protected>
              <BooksByCategory />
            </Protected>
          )
        },
        {
          path: "publishers/:id/books",
          element: (
            <Protected>
              <BooksByPublisher />
            </Protected>
          )
        },
        {
          path: "user/profile",
          element: (
            <Protected>
              <Profile />
            </Protected>
          )
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "cart",
          element: (
            <Protected>
              <Cart />
            </Protected>
          )
        },
        {
          path: "user/loans",
          element: (
            <Protected>
              <Loans/>
            </Protected>
          )
        },
        {
          path: "admin/addcopy",
          element: (
            <Protected>
              <AddCopy/>
            </Protected>
          )
        },
        {
          path: "admin/addauthor",
          element: (
            <Protected>
              <AddAuthor/>
            </Protected>
          )
        },
        {
          path: "admin/addcategory",
          element: (
            <Protected>
              <AddCategory/>
            </Protected>
          )
        },
        {
          path: "admin/editauthor",
          element: (
            <Protected>
              <EditAuthor/>
            </Protected>
          )
        },
        {
          path: "admin/editbook",
          element: (
            <Protected>
              <EditBook/>
            </Protected>
          )
        },
        {
          path: "admin/editcategory",
          element: (
            <Protected>
              <EditCategory/>
            </Protected>
          )
        },
        {
          path: "admin/editcopy",
          element: (
            <Protected>
              <EditCopy/>
            </Protected>
          )
        },
        {
          path: "admin/editpublisher",
          element: (
            <Protected>
              <EditPublisher/>
            </Protected>
          )
        },
        {
          path: "admin/returns",
          element: (
            <Protected>
              <EditLoan/>
            </Protected>
          )
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App