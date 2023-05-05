import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import Book from './pages/Book'
import Protected from './components/Protected'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Loans from './pages/Loans'

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
          path: "books/:id",
          element: (
            <Protected>
              <Book />
            </Protected>
          )
        },
        {
          path: "profile",
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
          path: "loans",
          element: (
            <Protected>
              <Loans/>
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