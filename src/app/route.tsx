import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LandingPage from "../pages/LandingPage" 
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import ProjectsPage from "../pages/ProjectsPage"
import CertificationsPage from "../pages/CertificationsPage"
import ContactPage from "../pages/ContactPage"
import ProjectDetailPage from "../components/projects/ProjectDetail/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "/work",
        element: <WorkPage />
      },
      {
        path: "/projects",
        element: <ProjectsPage  />
      },
      {
        path: "/certifications",
        element: <CertificationsPage  />
      },
       {
        path: "/contact",
        element: <ContactPage  />
      },
      {
        path: "/projects/:slug",
        element: <ProjectDetailPage   />
      }
    ],
  },
]);
