import { useEffect, useState } from "react";
import { Modal, Header, Footer, Main } from "./components";
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
        {modal && <Modal setModal={setModal} />}
        <Header score={score} setModal={setModal} />
        <Main />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
