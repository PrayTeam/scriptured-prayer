import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Info, About, Home, Login, NotFound, Settings } from "./views";
import { Faq } from "./views/Faq";
import { ProtectedRoutes } from "./components";
import { useLocalStorage } from "./hooks";
import { ProfileContext } from "./hooks";
import PrayerDeck from "./components/PrayerDeck";

const getRouter = (language: string) =>
  createBrowserRouter(
    [
      { path: "/", element: <Info /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/Faq", element: <Faq /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "/settings", element: <Settings /> },
          { path: "/home", element: <Home /> },
          { path: "/prayer-decks/:name", element: <PrayerDeck /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
    {
      basename: `/${language}`,
    },
  );

function App() {
  const [profile, setProfile] = useLocalStorage("profile");
  const router = getRouter(profile.language);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <Theme className="h-full">
        <RouterProvider router={router} />
      </Theme>
    </ProfileContext.Provider>
  );
}

export default App;
