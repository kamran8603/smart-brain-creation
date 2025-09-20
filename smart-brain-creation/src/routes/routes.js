import { Outlet } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";
import Labs from "../pages/labs/Labs";
import Programs from "../pages/programs/Programs";
import Approuter from "../Navbar/Approuter";

export const routes = [
    {
        path:"/",
        element:<Approuter/>,
        errorElement: <ErrorPage/>,
        children:[
            {
              index:true,
              element:<Home />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"labs",
                element:<Labs />
            },
            {
                path:"programs",
                element:<Programs />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"events",
                element:<Events/> 
            }
        ]
    }
]