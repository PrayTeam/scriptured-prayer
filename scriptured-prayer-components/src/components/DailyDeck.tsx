import nature from "~/assets/images/nature.jpg";

export function DailyDeck() {
  const today = new Date();
  const date = today.getDate();
  const ones_digit = date % 10;
  const date_suffix =
    ([11, 12, 13].includes(date) && "th") ||
    (ones_digit === 1 && "st") ||
    (ones_digit === 2 && "nd") ||
    (ones_digit === 3 && "rd") ||
    "th";
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day_names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date_string = `${day_names[today.getDay()]}, ${month_names[today.getMonth()]} ${date}${date_suffix}, ${today.getFullYear()}`;

  return (
    <div className="bg-lichen text-lg md:text-2xl bg-opacity-80 max-h-fit py-36 flex justify-center items-center pl-0 lg:pl-20 pt-52 pb-20 lg:pt-32 lg:pb-32">
      <div className="bg-gray px-8 lg:px-0 lg:pl-20 pt-10 lg:pt-0 rounded-3xl flex flex-col justify-center items-center h-[400px] min-w-[350px] w-2/3 lg:w-auto lg:aspect-[13/8] relative shadow-lg">
        <img
          className="absolute h-44 sm:h-52 lg:h-64 aspect-[11/8] sm:aspect-[13/7] lg:aspect-square rounded-lg left-auto -top-24 sm:-top-32 lg:top-auto lg:-left-32"
          src={nature}
          alt="Man on mountain peak with forest backdrop and sunlight"
        />
        <div className="w-full lg:w-2/3 flex flex-col gap-6 lg:items-start items-center font-medium">
          <p className="">{date_string}</p>
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-3xl md:text-4xl">
              Today's Daily Deck
            </h2>
            <p className="text-center lg:text-left">
              A group of verses that encourage praise and thanksgiving.
            </p>
          </div>
          <a
            href="/prayer-decks/daily"
            className="bg-leaf rounded-lg scale-100 hover:scale-110 ease-out duration-300 text-center text-white shadow-md shadow-night w-64 p-2"
          >
            <p className="text-2xl">Pray</p>
            <p className="text-base">2 min | 5 cards</p>
          </a>
        </div>
      </div>
    </div>
  );
}
