import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import PrayerDeck from "./components/PrayerDeck";

function App() {
  return (
    <>
      <Theme>
        <div className="h-screen flex flex-col">
          <h1 className="text-4xl">Scriptured Prayer</h1>

          <main>
            <PrayerDeck />
          </main>
          <footer className="mt-auto text-center text-sm">&copy; Scriptured Prayer 2024</footer>
        </div>
      </Theme>
    </>
  );
}

export default App;
