import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../Pages/MyList/MyList";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/add_tourists_spot',
                element: <AddTouristsSpot />
            }, {
                path: '/all_tourists_spot',
                element: <AllTouristsSpot />
            }, {
                path: '/my_list',
                element: <MyList />
            }, {
                path: 'sign_in',
                element: <SignIn />
            }, {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

export default routes;