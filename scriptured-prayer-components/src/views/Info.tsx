import { Button, Card } from "~/components/advertise";
import forest from "~/assets/forest.png";
import readingBible from "~/assets/reading-bible.jpg";
import Footer from "~/components/Footer";

export function Info() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${forest}')` }}
        className="w-full bg-no-repeat bg-center bg-cover"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row uppercase text-white font-bold p-8 md:text-xl lg:text-2xl text-center tracking-widest">
            <div className="md:mr-2">Pray Intentionally.</div>
            <div className="md:mr-2">Pray Scripturally.</div>
            <div className="md:mr-2">Pray Consistently.</div>
          </div>
          <h1 className="uppercase text-white font-bold pt-48 pb-64 px-8 text-center text-5xl md:text-6xl lg:text-8xl">
            Scriptured Prayer
          </h1>
        </div>
      </div>
      <div className="bg-snowgrass">
        <div className="flex px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="grow">
            <img src={readingBible} className="hidden md:block" />
          </div>
          <div>
            <h2 className="uppercase font-bold text-4xl">Welcome.</h2>
            <p className="my-4 text-xl">
              Scriptured Prayer is a tool designed to help you maximize your
              prayer life. Learn how to pray with Scripture-based prompts. Stay
              focused with a daily routine of prayers, and fall in love with God
              as you praise Him each day.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="bg-lichen">
        <div className="flex flex-col md:flex-row px-6 py-8 md:py-16 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="md:max-w-sm">
            <h2 className="uppercase font-bold text-4xl">Start Here.</h2>
            <p className="my-4 text-xl">
              Use the Quick Start Praise Decks or sign up for a free account to
              customize your prayer cards. Edit cards to add names, specific
              requests, and notes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <Card title="Names of Jesus" />
            <Card title="In Christ" />
            <Card title="Promises of God" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
