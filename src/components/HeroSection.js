import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

const yachts = [
  {
    name: "Princess S78",
    discr: "Best of the best",
    image: "/images/princessS78.jpg",
  },
  {
    name: "Princess F62",
    discr: "Good choice",
    image: "/images/princessF62.jpg",
  },
  {
    name: "Montecarlo 65",
    discr: "Simple and Safe",
    image: "/images/montecarlo65.jpg",
  },
];

function HeroSection() {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    document.title = yachts[n].name;
  });
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${yachts[n].image})` }}
    >
      <h1>{yachts[n].name}</h1>
      <p>{yachts[n].discr}</p>
      <div className="hero-btns">
        <Button
          value="Buy yacht"
          onClick={() => {
            alert(yachts[n].name + " bought!");
          }}
        ></Button>
      </div>
      <p></p>
      <div className="hero-btns">
        <Button
          value="Prev"
          onClick={() => (n > 0 ? setN(n - 1) : {})}
        ></Button>
        <Button
          value="Next"
          onClick={() => (n < yachts.length - 1 ? setN(n + 1) : {})}
        ></Button>
      </div>
    </div>
  );
}

export default HeroSection;
