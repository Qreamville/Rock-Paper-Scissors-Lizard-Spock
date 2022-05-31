import React from "react";
import "./header.css";

const Header = ({ score, setModal }) => {
  return (
    <header className="w-full md:w-3/4 lg:w-2/5 flex flex-col">
      <div className="header__main flex flex-row justify-between items-center px-2 py-1">
        <ul className="font-semibold text-white text-lg">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
          <li>LIZARD</li>
          <li>SPOCK</li>
        </ul>
        <div className="score bg-white text-center rounded-lg py-1 px-5">
          <p className="font-bold">SCORE</p>
          <h1 className="font-bold text-4xl">{score}</h1>
        </div>
      </div>
      <div className="header-btn text-center mt-4">
        <button
          className="text-white px-6 py-1 rounded-md font-semibold"
          onClick={() => setModal(true)}
        >
          Rules
        </button>
      </div>
    </header>
  );
};

export default Header;
