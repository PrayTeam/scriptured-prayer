import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import { Info, About, Home } from "./views";

const router = createBrowserRouter([
  { path: "/", element: <Info /> },
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return (
    <Theme className="h-full">
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
