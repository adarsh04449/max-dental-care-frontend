import React from "react";
import { useRoutes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard"
import AboutUs from "./components/About/AboutUs";
import ReviewPage from "./components/Review/ReviewPage";

const ProjectRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/about",
            element: <AboutUs />
        },
        {
            path: "/reviews",
            element:<ReviewPage/>
        }
    ]);

    return element;
}

export default ProjectRoutes;