import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },

            {
                path : 'coverage',
                Component : Coverage
            },
            {
                path : 'sendParcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>
                
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
            },
            {
                path : 'register',
                element : <Register></Register>
            }

        ]
    }
]);