import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// TeamContainer
import SwiperContainer from "./components/TeamMemberSwiper.tsx";
import SwiperItem from "./components/TeamMemberCard.tsx";
import randomGuy from "./assets/images/random-guy.jpg"; // Import your image paths
import randomGirl from "./assets/images/random-girl.jpg"; // Import your image paths

const MainComponent: React.FC = () => {
  return (
    <SwiperContainer>
      <SwiperItem
        image={randomGuy}
        title="The Rock"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
      <SwiperItem
        image={randomGirl}
        title="Amanda Jamanda"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
      <SwiperItem
        image={randomGuy}
        title="Dwayne Johnson"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
      <SwiperItem
        image={randomGirl}
        title="Sadison"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
      <SwiperItem
        image={randomGuy}
        title="The Brahma Bull"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
      <SwiperItem
        image={randomGirl}
        title="Evil Knieval"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere deleniti officiis non vero repellendus dignissimos, praesentium esse explicabo."
      />
    </SwiperContainer>
  );
};

export default MainComponent;
