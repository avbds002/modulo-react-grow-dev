import GlobalStyles from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "styled-components";
import themes from "./theme";

export function App() {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}
