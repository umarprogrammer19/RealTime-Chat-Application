import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "",
    element: <Home />
  }, {
    path: "/login",
    element: <Login />
  }, {
    path: "/signup",
    element: <SignUp />
  }]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)