import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PostDetails } from "../pages/PostDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <PostDetails />,
  },
]);
