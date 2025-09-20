import { Outlet } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Labs from "../pages/Labs";
import Programs from "../pages/Programs";
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