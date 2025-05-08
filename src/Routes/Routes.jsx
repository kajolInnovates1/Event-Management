import {
    createBrowserRouter,

} from "react-router";
import Layouts from "../MainLayouts/Layouts";
import Home from "../Pages/Home/Home";
import Events from "../Components/Events/Events";
import EventDetails from "../Pages/EventDetails/EventDetails";
import MyEvents from "../Pages/MyEvents/MyEvents";
import Category from "../Components/Category/Category";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Erorr from "../Components/Erorr/Erorr";
import Terms from "../Components/Terms/Terms";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
        errorElement: <Erorr></Erorr>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/public/event.json'),
                hydrateFallbackElement: <p>Loading.........</p>

            },
            {
                path: '/events',
                Component: Events,
                loader: () => fetch('/public/event.json'),
            },
            {
                path: '/event-details/:id',
                loader: () => fetch('/public/event.json'),
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>

            },
            {
                path: '/myevents',
                Component: MyEvents
            },
            {
                path: '/category',
                Component: Category,
                loader: () => fetch('/public/event.json'),
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/terms',
                Component: Terms
            },
            {
                path: '/policy',
                Component: PrivacyPolicy
            }
        ]
    },
]);
export default router;