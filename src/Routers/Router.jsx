import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Navbar from "../Pages/Navbar";
import Achievements from "../Pages/Achievements";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import ScrollToTop from "../component/ScrollToTop";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> 
        <Navbar />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
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