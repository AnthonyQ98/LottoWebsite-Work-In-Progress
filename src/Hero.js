import React, { useState, useEffect } from "react";
import logo from "./images/logo.PNG";
import "./Hero.css";

const Hero = ({ handleLogout }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    fetch("/number")
      .then((res) => res.json())
      .then((data) => {
        setCurrentNumber(data.number);
      });
  }, []);
  return (
    <section className="hero">
      <nav>
        <h2>Raving Raffles</h2>
        <img src={logo} />
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="container">
        <div className="upperDiv">
          <h2 className="raffleText">The last winning raffle number was</h2>
          <div className="winningNumber">
            <h2>{currentNumber}</h2>
          </div>
        </div>
        <div className="lowerDiv">
          <div>
            <p>TESTING TESTING TESTING</p>
          </div>
          <div>
            <p>TESTING TESTING TESTING</p>
          </div>
          <div>
            <p>TESTING TESTING TESTING</p>
          </div>
          <div>
            <p>TESTING TESTING TESTING</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
