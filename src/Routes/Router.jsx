import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PriveatRoute/PrivateRoute";
import Destination from "../Pages/Destination";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/booking",
                element: <PrivateRoute><Booking /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/destination",
                element: <PrivateRoute><Destination /></PrivateRoute>
            }
        ]
    },
]);