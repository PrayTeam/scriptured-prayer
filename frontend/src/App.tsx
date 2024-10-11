import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import {
  Home,
  About,
  Dashboard,
  Login,
  NotFound,
  Profile,
  Search,
  DailyDeck,
  Prayers,
  PrayerDetail,
  Privacy,
} from "./views";
import { Navigation, ProtectedRoutes, PrayerDeck } from "./components";
import { useLocalStorage, ProfileContext } from "./hooks";

function App() {
  const [profile, setProfile] = useLocalStorage("profile");

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <Theme className="flex flex-col h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route element={<Navigation />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="daily-deck" element={<DailyDeck />} />
              <Route path="prayer-decks/:id" element={<PrayerDeck />} />
              <Route path="search" element={<Search />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="profile" element={<Profile />} />
                <Route path="prayers">
                  <Route index element={<Prayers />} />
                  <Route path=":id" element={<PrayerDetail />} />
                </Route>
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
