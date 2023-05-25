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
import AddCopy from './pages/AddCopy'

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
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App