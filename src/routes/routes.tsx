import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Home from "../pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";


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
                path: "/products/:id",
                element: <ProductDetails />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            }
        ]
    },

]);