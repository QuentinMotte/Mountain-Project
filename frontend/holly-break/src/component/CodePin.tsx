import { type } from "os";
import React from "react";
import { StatefulPinInput } from "react-input-pin-code";

type CodePinProps = {
  modalOpen: boolean;
  setModalOpen: any;
  profiles: any;
};

function CodePin({ modalOpen, setModalOpen, profiles }: CodePinProps) {
  const idProfile = localStorage.getItem("profile");

  function checkProfile(id: string | null) {
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i]._id === idProfile) {
        return profiles[i].pin_code;
      }
    }
  }

  function handleChoiseProfile() {
    const kid = localStorage.getItem("kid");
    if (kid === "true") {
      window.location.href = "/Kid";
    } else {
      window.location.href = "/Home";
    }
  }

  const [pinCode, setPinCode] = React.useState("");

  function handlePinCode(e: any) {
    setPinCode(e);
  }

  const newPinCode: string = pinCode.toString().replace(/,/g, "");

  function handleCheckPinCode() {
    if (newPinCode === checkProfile(idProfile)) {
      handleChoiseProfile();
    } else {
      alert("Pin code incorrect");
    }
  }

  return (
    <div className="codePin_container">
      <div className="codePin_subContainer">
        <i
          className="fa-solid fa-square-xmark"
          onClick={() => setModalOpen(false)}
        ></i>
        <h1>Code Pin</h1>
        <p>
          Please enter the code pin that you have setup in your profile to
          access
        </p>
        <div className="codePin_inputContainer">
          <StatefulPinInput
            name="pin_code"
            id="profilePIN"
            length={4}
            size="lg"
            initialValue=""
            required={true}
            onComplete={handlePinCode}
          />
        </div>
        <button onClick={handleCheckPinCode}>Validate</button>
      </div>
    </div>
  );
}

export default CodePin;
