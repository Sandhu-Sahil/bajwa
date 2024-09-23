import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopThree from "pages/DesktopThree";
import Catalog from "pages/DesktopFour";
import Contact from "pages/Contact";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
    {
      path: "catalog",
      element: <Catalog />,
    },
    {
      path: "contact",
      element: <Contact />,
    }
  ]);

  return element;
};

export default ProjectRoutes;
