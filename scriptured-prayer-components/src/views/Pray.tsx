import Footer from "~/components/Footer";
import PrayerDeck from "~/components/PrayerDeck";

export function Pray() {
  return (
    <div className="h-screen flex flex-col">
      <main>
        <PrayerDeck />
      </main>
      <Footer />
    </div>
  );
}
