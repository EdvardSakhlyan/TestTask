import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Tests from "../components/Tests";
import Team from "../components/Team";

// const routes = createRoutesFromElements(
//         <>
//             <Route path="/" element={<Dashboard/>}/>
//             <Route path="/tests" element={<Tests/>}/>
//             <Route path="/team" element={<Team/>}/>
//         </>
//
//
// )

const routes = [
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/tests",
        element: <Tests/>,
    },
    {
        path: "/team",
        element: <Team/>,
    }
]



const router = createBrowserRouter(routes)

export default router