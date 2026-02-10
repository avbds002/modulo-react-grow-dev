import GlobalStyles from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}
