import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { RegionPage } from "./pages/region-page";

export const appRouter = createBrowserRouter([
  {
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <RegionPage />,
      },
    ],
  },
]);
