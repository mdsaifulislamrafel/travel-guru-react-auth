import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);