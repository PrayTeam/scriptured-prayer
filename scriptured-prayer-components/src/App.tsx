import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import { Info, About, Pray, Discover } from "./views";

// this is really bad. todo: use a safer method for
// obtaining i18n language code from browser
const language =
  import.meta.env.NODE_ENV === "development"
    ? ""
    : window.location.pathname.split("/")[1];

const router = createBrowserRouter(
  [
    { path: "/", element: <Info /> },
    { path: "/about", element: <About /> },
    { path: "/pray", element: <Pray /> },
    { path: "/discover", element: <Discover /> },
  ],
  {
    basename: `/${language}`,
  },
);

function App() {
  return (
    <Theme className="h-full">
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
