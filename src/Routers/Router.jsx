import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Navbar from "../Pages/Navbar";
import Achievements from "../Pages/Achievements";

import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
export default Routers;
