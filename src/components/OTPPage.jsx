import React, { useState } from "react";
import "./OTPPage.css";

const OTPPage = ({ otp }) => {
  const [otpData, setOtpData] = useState({
    otpNumber: "",
  });
  const [verificationResult, setVerificationResult] = useState(""); // State for verification result

  const handleChange = (e) => {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otpData.otpNumber === otp) {
      setVerificationResult("success");
    } else {
      setVerificationResult("failure");
    }
  };

  return (
    <div className="justify-center">
      <div className="justify-center">
        <div className="align-center mx-auto w-2/4 py-16 small-head-text">
          Patient Verification
        </div>
        <div className="otp_container">
          <form
            className="w-3/4 mx-auto justify-between"
            onSubmit={handleSubmit}
          >
            <br />
            <label className="flex">
              <p className="lucid-font text-bold opacity-75 el_form_label px-2.5">
                OTP Number:
              </p>
              <input
                type="text"
                placeholder="OTP Number"
                name="otpNumber"
                value={otpData.otpNumber}
                onChange={handleChange}
                className="text-white text-bold el_form_input"
              />
            </label>
            <br />
            <button
              style={{
                backgroundColor: "green",
                width: "40%",
                height: "40px",
                margin: "auto auto auto 20%",
                borderRadius: "10px",
              }}
              className="el_btn"
              type="submit"
            >
              <p className="text-gray-300 font-bold">Submit OTP</p>
            </button>
          </form>
        </div>
      </div>
      {/* Conditional rendering of the popup component */}
      {verificationResult === "success" && (
        <div className="popup success">Verification successful!</div>
      )}
      {verificationResult === "failure" && (
        <div className="popup failure">
          Verification failed. Please try again.
        </div>
      )}
    </div>
  );
};

export default OTPPage;
