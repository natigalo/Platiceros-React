import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        elemnt: <Main/>,
        children:[
            {path: "/", elemnt: <Index/>},
            
        ]
    }
])