import { useEffect, useState } from "react";
import { Modal } from "./components";
import { HashRouter } from "react-router-dom";

function App() {
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const scoreItem = JSON.parse(localStorage.getItem("score"));
    if (scoreItem) {
      setScore(scoreItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  return (
    <HashRouter>
      <div className="App flex justify-start flex-col items-center">
        {modal && <Modal setModal={setModal} />}
      </div>
    </HashRouter>
  );
}

export default App;
