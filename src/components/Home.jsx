import React, { useState, useEffect } from "react";
import "./Home.css";
import Datta from "./data.json";
import DetailsCard from "./DetailsCard";
import OTPPage from "./OTPPage";

const Home = () => {
  const [formData, setFormData] = useState({
    membershipNumber: "",
    insurerNumber: "",
  });
  const [otp, setOtp] = useState(null);
  const [Data, setDatta] = useState(null);
  const [response, setResponse] = useState(null);
  //   const Data = null;
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending the data to an API x

    try {
      const response = await fetch(
        "https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
        
        
      );

      const data = await response.json();
      setResponse(data);
      setDatta(Datta);
      
    } catch (error) {
      console.error(error);
    }


    // Reset the form after submission
    setFormData({
      membershipName: "",
      insurerNumber: "",
    });
  };

  return (
    <div>
      <div className="mx-auto w-3/4 mt-20">
        <p className="small-head-text text-center">G3 Patient Authentication</p>
      </div>
      <div>
        <div>
          <div className="justify-center form_div">
            <form
              className="w-3/4 mx-auto justify-between"
              onSubmit={handleSubmit}
            >
              <br />
              <label className="flex">
                <p className="lucid-font text-bold opacity-75 el_form_label px-2.5">
                  Member Number:{" "}
                </p>
                <input
                  type="text"
                  placeholder="Membership Number"
                  name="membershipNumber"
                  value={formData.membership}
                  onChange={handleChange}
                  className="text-white text-bold el_form_input"
                />
              </label>
              <br />
              <label className="flex">
                <p className="lucid-font text-bold opacity-75 el_form_label px-2.5">
                  Insurer Number:
                </p>
                <input
                  type="text"
                  name="insurerNumber"
                  placeholder="Insurer Number"
                  value={formData.insurerNumber}
                  onChange={handleChange}
                  className="text-gray-300 text-bold el_form_input"
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
                <p className="text-gray-300 font-bold">Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="extra"></div>
      {Data ? <DetailsCard data={Data} /> : <></>}
      <div className="extra"></div>
      <OTPPage otp={otp} />
      <div className="extra"></div>
    </div>
  );
};

export default Home;
