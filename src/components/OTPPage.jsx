import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./OTPPage.css";

const OTPPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const otpValue = queryParams.get("otp");
  console.log("value-" + otpValue);
  const [otpData, setOtpData] = useState({
    otpNumber: "",
  });
  const [verificationResult, setVerificationResult] = useState("");

  const handleChange = (e) => {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpData.otpNumber === otpValue) {
      setVerificationResult("success");
      navigate('/visit');
    } else {
      setVerificationResult("failure");
    }
  };

  return (
    <div className="justify-center">
      <div className="justify-center">
        <div className="flex justify-center items-center mx-auto w-4/5 py-16 small-head-text">
          Patient Verification
        </div>
        <div className="otp_container mx-auto">
          <form
            className="w-3/4 mx-auto justify-between"
            onSubmit={handleSubmit}
          >
            <br />
            <label>
              <p className="sm:text-4xl lucid-font text-bold opacity-75 el_form_label px-2.5">
                OTP Number:
              </p>
              <input
                type="text"
                placeholder="OTP Number"
                name="otpNumber"
                value={otpData.otpNumber}
                onChange={handleChange}
                className="sm:text-3xl sm:mt-20 text-blue-700 text-bold el_form_input"
              />
            </label>
            <br />
            <button
              className="sm:h-20 text_light_green w-11/12 mt-5 mx-auto border rounded-full bg-green-500 h-10"
              type="submit"
            >
              <p className="sm:text-3xl text-gray-300 font-bold">Submit OTP</p>
            </button>
          </form>
        </div>
      </div>
      {/* Conditional rendering of the popup component */}
      {verificationResult === "success" && (
        <div className="sm:text-4xl popup success">Verification successful!</div>
      )}
      {verificationResult === "failure" && (
        <div className="sm:text-4xl popup failure">
          Verification failed. Please try again.
        </div>
      )}
    </div>
  );
};

export default OTPPage;
