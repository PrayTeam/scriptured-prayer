import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import { Info, About, Home } from "./views";

// this is really bad. todo: use a safer method for
// obtaining i18n language code from browser
const language = window.location.pathname.split("/")[1];

const router = createBrowserRouter(
  [
    { path: "/", element: <Info /> },
    { path: "/app/about", element: <About /> },
    { path: "/app/home", element: <Home /> },
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