import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Choice from "./Choice";
import Game from "./Game";
import "./main.css";

const Main = () => {
  const [userChoice, setUserChoice] = useState("");
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Choice setUserChoice={setUserChoice} />} />
        <Route path="/game" element={<Game userChoice={userChoice} />} />
      </Routes>
    </main>
  );
};

export default Main;
