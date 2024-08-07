import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../Pages/MyList/MyList";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import TouristCardDetails from "../Pages/TouristCardDetails/TouristCardDetails";
import AllTouristDetails from "../Pages/AllTouristDetails/AllTouristDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CountryCardDetails from "../Pages/CountryCardDetails/CountryCardDetails";

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
                path: '/tourist_card_details/:id',
                element: <PrivateRoute><TouristCardDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/touristSpotCards/${params.id}`)
            }, {
                path: '/add_tourists_spot',
                element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>
            }, {
                path: '/all_tourists_spot',
                element: <AllTouristsSpot />
            }, {
                path: '/all_tourist_details/:id',
                element: <PrivateRoute><AllTouristDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/addTouristSpot/${params.id}`)
            }, {
                path: '/my_list',
                element: <PrivateRoute><MyList /></PrivateRoute>,
            }, {
                path: '/country_spots',
                element: <CountryCardDetails />,
                loader: () => fetch(`${import.meta.env.VITE_URL}/touristSpotCards`),
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