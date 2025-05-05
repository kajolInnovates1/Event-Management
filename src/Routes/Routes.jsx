import {
    createBrowserRouter,

} from "react-router";
import Layouts from "../MainLayouts/Layouts";
import Home from "../Pages/Home/Home";
import Events from "../Components/Events/Events";
import EventDetails from "../Pages/EventDetails/EventDetails";

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
            }
        ]
    },
]);
export default router;