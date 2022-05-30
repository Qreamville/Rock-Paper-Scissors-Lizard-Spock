import React from "react";
import rules from "../../assets/images/image-rules-bonus.svg";

const Modal = ({ setModal }) => {
  return (
    <div className="modal p-4">
      <div className="modal-content bg-white h-2/3 px-6 flex items-center justify-center">
        <div className="modal-img p-4">
          <img src={rules} alt="rules" className="max-w-full h-auto" />
        </div>
      </div>
      <button
        className="bg-white mt-6 px-6 py-2 rounded-md font-semibold"
        onClick={() => setModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
