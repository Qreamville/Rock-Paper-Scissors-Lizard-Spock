import { useEffect, useState } from "react";
import { Modal, Header } from "./components";
import { HashRouter } from "react-router-dom";

function App() {
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const scoreItem = JSON.parse(localStorage.getItem("spock"));
    if (scoreItem) {
      setScore(scoreItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spock", JSON.stringify(score));
  }, [score]);

  return (
    <HashRouter>
      <div className="App flex justify-start flex-col items-center">
        <Header score={score} />
        {modal && <Modal setModal={setModal} />}
      </div>
    </HashRouter>
  );
}

export default App;
