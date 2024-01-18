import PrayerDeck from "~/components/PrayerDeck";

export function Home() {
  return (
    <div className="h-screen flex flex-col">
      <main>
        <PrayerDeck />
      </main>
      <footer className="mt-auto text-center text-sm">
        &copy; Scriptured Prayer 2024
      </footer>
    </div>
  );
}
