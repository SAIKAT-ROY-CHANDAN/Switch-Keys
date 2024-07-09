import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },

]);