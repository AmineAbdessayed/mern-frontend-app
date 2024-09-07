import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Regitser from "../pages/Regitser";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Products from "../pages/Products";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Test from "../pages/test";
import SearchProduct from "../pages/SearchProduct";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/forget-password",
                element: <ForgetPassword />
            },
            {
                path: "/register",
                element: <Regitser />
            },
            {
                path: "/categorie",
                element: <Category />
            },
            {
                path: "cart",
                element: <Cart /> 

            },
            {
                path: "/product/:id",
                element: <ProductDetails/> 

            },
            {
                path: "search",
                element: <SearchProduct/> 

            },
        
        

            {
                path: "/admin",
                element: <AdminPanel />,
                children: [

                    {
                        path: "allUsers",
                        element: <AllUsers />
                    },
                    {
                        path: "products",
                        element: <Products />
                    }
                ]
            }
        ]

    }
])

export default router