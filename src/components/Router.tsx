import Home from "./Home/Index";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import NotFound from "./NotFound/NotFound";

export const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"*",
        element:<NotFound/>
    },
]