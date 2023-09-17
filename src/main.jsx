import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Login from "./routes/login";
import Signup from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      light: '#8e99f3',
      main: '#3f51b5',
      dark: '#26418f',
      contrastText: '#fff'
    }
  },
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
       <RouterProvider router={router} />  
     </ThemeProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();