import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },

    {
        path : "/",
        Component : AuthLayout,
        children : [
            {
                path : 'login',
                element : <Login></Login>
            }    
        ]
    }
]);