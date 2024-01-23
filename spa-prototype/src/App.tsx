import "@radix-ui/themes/styles.css";

import { Heading, Theme } from "@radix-ui/themes";
import PrayerDeck from "./components/PrayerDeck";

function App() {
  return (
    <>
      <Theme>
        <div className="h-screen flex flex-col">
          <Heading size="9" my="8" >Scriptured Prayer</Heading>

          <main>
            <PrayerDeck />
          </main>
          <footer className="mt-auto text-center text-sm">&copy; Scriptured Prayer 2024</footer>
        </div>

        {/* <ThemePanel /> */}

      </Theme>

    </>
  );
}

export default App;
