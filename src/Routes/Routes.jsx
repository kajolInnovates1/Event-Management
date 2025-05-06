import {
    createBrowserRouter,

} from "react-router";
import Layouts from "../MainLayouts/Layouts";
import Home from "../Pages/Home/Home";
import Events from "../Components/Events/Events";
import EventDetails from "../Pages/EventDetails/EventDetails";
import MyEvents from "../Pages/MyEvents/MyEvents";
import Category from "../Components/Category/Category";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
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
                Component: EventDetails,
                loader: () => fetch('/public/event.json')
            },
            {
                path: '/myevents',
                Component: MyEvents
            },
            {
                path: '/category',
                Component: Category,
                loader: () => fetch('/public/event.json'),
            }
        ]
    },
]);
export default router;