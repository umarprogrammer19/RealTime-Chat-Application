import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { store } from './store/store';
import { Provider } from 'react-redux';

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
    element: <Signup />
  }]
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)