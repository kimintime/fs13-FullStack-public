import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import Book from './pages/Book'
import ProtectedProfile from './components/ProtectedProfile'
import Profile from './pages/Profile'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "books/:id",
          element: <Book />
        },
        {
          path: "profile",
          element: (
            <ProtectedProfile>
              <Profile />
            </ProtectedProfile>
          )
        },
        {
          path: "login",
          element:
        }
        

      ]
    }
  ])
  return (
    <div>App</div>
  )
}

export default App