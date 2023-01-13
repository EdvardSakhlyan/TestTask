import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Tests from "../components/Tests";
import Team from "../components/Team";
import Root from "../components/Root";
import NotFound from "../components/NotFound";
import Content from "../components/Content";

const routes = [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    children: [
                        {
                            path: "popular",
                            element: <Content type="popular"/>
                        },
                        {
                            path: "favorite",
                            element: <Content type="favorite"/>
                        },
                        {
                            path: "new",
                            element: <Content type="new"/>
                        }
                    ]
                },
                {
                    path: "tests",
                    element: <Tests/>,
                    children: [
                        {
                            path: "popular",
                            element: <Content type="popular"/>
                        },
                        {
                            path: "favorite",
                            element: <Content type="favorite"/>
                        },
                        {
                            path: "new",
                            element: <Content type="new"/>
                        }
                    ]
                },
                {
                    element: <Team />,
                    path: "team",
                    children: [
                        {
                            path: "popular",
                            element: <Content type="popular"/>
                        },
                        {
                            path: "favorite",
                            element: <Content type="favorite"/>
                        },
                        {
                            path: "new",
                            element: <Content type="new"/>
                        }
                    ]
                },
                {
                    element: <NotFound />,
                    path: "*",
                },
            ],
        },
    ]


const router = createBrowserRouter(routes)
//
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Root/>}>
//             <Route index element={<Dashboard/>}/>
//             <Route path="/tests" element={<Tests/>}/>
//             <Route path="/team" element={<Team/>}/>
//             <Route path="*" element={<NotFound/>}/>
//         </Route>
//     ))

export default router