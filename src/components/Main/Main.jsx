import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Choice from "./Choice";
import Game from "./Game";
import "./main.css";

const Main = ({ setScore }) => {
  const [userChoice, setUserChoice] = useState("");
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Choice setUserChoice={setUserChoice} />} />
        <Route
          path="/game"
          element={<Game userChoice={userChoice} setScore={setScore} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
