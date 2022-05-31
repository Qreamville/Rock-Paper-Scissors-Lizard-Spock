import React from "react";
import { useNavigate } from "react-router-dom";
import lizard from "../../assets/images/icon-lizard.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import spock from "../../assets/images/icon-spock.svg";

const Choice = ({ setUserChoice }) => {
  const navigate = useNavigate();

  // onClick function to go to main game
  const onClick = (e) => {
    setUserChoice(e.target.id);
    navigate("/game");
  };

  return (
    <div className="choice h-full w-full  md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center gap-1">
      <div className="line1">
        <div className="line1-image1">
          <div>
            <img
              src={scissors}
              alt="scissors"
              id="scissors"
              className="w-3/5 cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <div className="line2 w-full flex flex-row justify-between items-center">
        <div className="line2-image1">
          <div>
            <img
              src={spock}
              alt="spock"
              id="spock"
              className="w-3/5 cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
        <div className="line2-image2">
          <div>
            <img
              src={paper}
              alt="paper"
              id="paper"
              className="w-3/5 cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <div className="line3 w-full flex flex-row justify-between items-center mt-12 px-5 md:px-10">
        <div className="line3-image1">
          <div>
            <img
              src={lizard}
              alt="lizard"
              id="lizard"
              className="w-3/5 cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
        <div className="line3-image2">
          <div>
            <img
              src={rock}
              alt="rock"
              id="rock"
              className="w-3/5 cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
