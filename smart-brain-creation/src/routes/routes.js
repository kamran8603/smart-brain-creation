import { Outlet } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";
import Labs from "../pages/labs/Labs";
import Programs from "../pages/programs/Programs";
import Approuter from "../Navbar/Approuter";
import Gameabout from "../game/Gamepages/GameAbout/Gameabout"
import GameContact from "../game/Gamepages/GameContact/GameContact"

import GameZoneRouter from "../game/Game section Navbar/GameZoneRouter";
import Gamezone from "../game/Gamepages/GameHome/Gamezone";
import Game from "../game/Gamepages/Games/Game";
import Terms from "../game/Gamepages/Terms.js/Terms";

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
        ],
        
    },
    {
        path: "/gamezone",
        element: <GameZoneRouter/>,   // 🔹 Alag GameZone Layout
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <Gamezone/>
          },
          {
            path : "about",
            element:<Gameabout/>
          },
          {
            path:"contact",
            element: <GameContact/>
          },
          {
            path:"terms",
            element:<Terms/>
          }
         
        ],
      },
]