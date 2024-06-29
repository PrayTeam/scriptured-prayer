import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Home, About, Dashboard, Login, NotFound, Settings } from "./views";
import { Navigation, ProtectedRoutes } from "./components";
import { useLocalStorage } from "./hooks";
import { ProfileContext } from "./hooks";
import PrayerDeck from "./components/PrayerDeck";

function App() {
  const [profile, setProfile] = useLocalStorage("profile");

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <Theme className="h-full">
        <BrowserRouter basename={`/${profile.language}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route element={<Navigation />}>
              <Route path="prayer-decks/:id" element={<PrayerDeck />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="settings" element={<Settings />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Theme>
    </ProfileContext.Provider>
  );
}

export default App;
