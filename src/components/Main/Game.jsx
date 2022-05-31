import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import lizard from "../../assets/images/icon-lizard.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import spock from "../../assets/images/icon-spock.svg";

const Game = ({ userChoice, setScore }) => {
  const [endGame, setEndGame] = useState(null);
  const [computerChoice, setComputerChoice] = useState("");
  const [countDown, setCountDown] = useState(3);
  let navigate = useNavigate();

  // generate random computer choice
  const handleComputerChoice = () => {
    let elementArray = ["scissors", "lizard", "paper", "spock", "rock"];
    let random = elementArray[Math.floor(Math.random() * 2)];
    setComputerChoice(random);
  };

  useEffect(() => {
    handleComputerChoice();
  }, [userChoice]);

  // Generate user image
  let userImage;
  switch (`${userChoice}`) {
    case "scissors":
      userImage = scissors;
      break;
    case "spock":
      userImage = spock;
      break;
    case "paper":
      userImage = paper;
      break;
    case "rock":
      userImage = rock;
      break;
    case "lizard":
      userImage = lizard;
      break;
    default:
      break;
  }

  // Generate computer image
  let computerImage;
  switch (`${computerChoice}`) {
    case "scissors":
      computerImage = scissors;
      break;
    case "spock":
      computerImage = spock;
      break;
    case "paper":
      computerImage = paper;
      break;
    case "rock":
      computerImage = rock;
      break;
    case "lizard":
      computerImage = lizard;
      break;
    default:
      break;
  }

  // Game win or lose logic function
  useEffect(() => {
    const gameResult = () => {
      if (
        (userChoice === "scissors" &&
          (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "paper" &&
          (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "rock" &&
          (computerChoice === "lizard" || computerChoice === "scissors")) ||
        (userChoice === "lizard" &&
          (computerChoice === "spock" || computerChoice === "paper")) ||
        (userChoice === "spock" &&
          (computerChoice === "scissors" || computerChoice === "rock"))
      ) {
        setEndGame("You Won 🎊");
        setScore((prev) => {
          return prev + 1;
        });
      } else if (
        (userChoice === "scissors" &&
          (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "paper" &&
          (computerChoice === "lizard" || computerChoice === "scissors")) ||
        (userChoice === "rock" &&
          (computerChoice === "paper" || computerChoice === "spock")) ||
        (userChoice === "lizard" &&
          (computerChoice === "rock" || computerChoice === "scissors")) ||
        (userChoice === "spock" &&
          (computerChoice === "lizard" || computerChoice === "paper"))
      ) {
        setEndGame("You Lost 😞");
      } else {
        setEndGame("Draw 😑");
      }
    };

    const timer =
      countDown > 0 &&
      setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);

    if (countDown === 0) {
      setTimeout(() => {
        gameResult();
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [
    userChoice,
    computerChoice,
    setEndGame,
    countDown,
    setCountDown,
    setScore,
  ]);

  // Play again function
  const playAgainBtn = () => {
    navigate("/");
    setComputerChoice(null);
  };

  return (
    <main>
      <div className="flex items-center justify-center gap-20 flex-row">
        <div>
          <h4 className="text-white">YOU</h4>
          <div className="game-image1 cursor-pointer">
            <div>
              <img src={userImage} alt="user" className="w-3/5 h-auto" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white">OPPONENT</h4>
          <div className="game-image2 cursor-pointer">
            <div>
              {countDown === 0 ? (
                <img
                  src={computerImage}
                  alt="computer"
                  className="w-3/4 h-auto"
                />
              ) : (
                <h1 className="font-bold text-3xl">{countDown}</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      {endGame && (
        <div className="text-center">
          <p className="text-center text-2xl mb-5 text-white">{endGame}</p>
          <button
            className="bg-white px-4 py-2 rounded-md font-semibold"
            onClick={playAgainBtn}
          >
            Play Again
          </button>
        </div>
      )}
    </main>
  );
};

export default Game;
