import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import PrayerDeck from "./components/PrayerDeck";

function App() {
  return (
    <>
      <Theme>
        <h1 className="text-4xl">Scriptured Prayer</h1>

        <main>
          <PrayerDeck />
        </main>
        <footer>&copy; 2024</footer>
      </Theme>
    </>
  );
}

export default App;
