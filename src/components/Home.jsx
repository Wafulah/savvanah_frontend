import React, { useState, useEffect } from "react";
import "./Home.css";

import { store } from "./store";
// import Datta from "./data.json";
import DetailsCard from "./DetailsCard";

import Team from "./Team";

import HomeImage from "../assets/home.png";
import DocImage from "../assets/doctors.svg";
import VsImage from "../assets/vision.svg";
import InsImage from "../assets/app.svg";

const Home = () => {
  const [formData, setFormData] = useState({
    membershipNumber: "",
    insurerNumber: "",
  });

  const [Data, setDatta] = useState(null);
  const [response, setResponse] = useState(null);
  //   const Data = null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/member-eligibility/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            membershipNumber: formData.membershipNumber,
            insurerNumber: formData.insurerNumber,
          }),
        }
      );

      const data = await response.json();
      setDatta(data);
      store.member_data = data;
    } catch (error) {
      console.error(error);
    }

    // Reset the form after submission
    setFormData({
      membershipNumber: "",
      insurerNumber: "",
    });
  };

  return (
    <div className=" w-screen">
      {/* <div className="mx-auto w-3/4 mt-20">
        <p className="small-head-text text-center">G3 Patient Authentication</p>
      </div> */}

      {/* start of header */}
      <div>
        <div className=" sm:w-3/4 header_div w-11/12">
          <div className="xl:flex xl:justify-center header_glassmorphism  header_child">
            <div className="hide w-0 h-0 xl:w-2/5 xl:h-full xl:flex-shrink-1">
              <img
                src={HomeImage}
                alt="G3"
                className="h-full bg-cover w-full"
              />
            </div>
            <div className=" xl:w-2/4 xl:mx-0 mx-auto w-3/4 mt-5 block">
              <div>
                <p className="bg-inherit text_light_green smaller-head-text text-center">
                  G3 Patient Authentication
                </p>
              </div>

              <div className="xl:mt-10 flex justify-center">
                <div className="xl:w-3/4 text-center">
                  <p className="xl:text-base sm:text-xl text-base py-4 px-1">
                    G3 Patient Authentication is an online platform that enables
                    hospitals to verify the insurance status of their patients.
                    Using their member number, payer slider number, and phone
                    number, hospitals can seamlessly authenticate patients and
                    ensure smooth insurance processing.
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="xl:mt-16 flex justify-center">
                <button className="w-3/4  text_light_green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Get Started
                </button>
              </div>
              {/* end of button */}
            </div>
          </div>
        </div>
      </div>
      {/* end of header */}
      <div className="mt-10 curved_div info_curve_div">
        <div className="curve_extra"></div>
        <div className=" xl:w-2/3 sm:w-3/5 info_div h-1/5 w-3/4  mb-5">
          <div className="h-2/4 w-3/4 mx-auto ">
            <img
              src={InsImage}
              alt="doctors"
              className="w-full h-full bg-cover bg-center"
            />
          </div>
          <div>
            <p className="bg-inherit text_light_green pt-2.5 px-10 ">
              Patients
            </p>
            <p className="opacity-50 bg-inherit text-gray-500 font-bold pt-1 px-10 ">
              Keep track of your insurance cover on real time from any device.
            </p>
          </div>
        </div>
        ``
        <div className="xl:w-2/3 sm:w-3/5 info_div h-1/5 w-3/4  mb-5">
          <div className="h-2/4 w-3/4 mx-auto ">
            <img
              src={DocImage}
              alt="doctors"
              className="pt-3 w-full h-full bg-cover bg-center"
            />
          </div>
          <div>
            <p className="bg-inherit text_light_green pt-2.5 px-10 ">
              Medical Practitioners
            </p>
            <p className="opacity-50 bg-inherit text-gray-500 font-bold pt-1 px-10 ">
              {" "}
              Authenticate and verify Patients insurance details easy and fast
            </p>
          </div>
        </div>
        <div className="xl:w-2/3 sm:w-3/5 info_div h-1/5 w-3/4  mb-5">
          <div className="h-2/4  w-3/4 mx-auto">
            <img
              src={VsImage}
              alt="doctors"
              className="pt-3 w-full h-full bg-cover bg-center"
            />
          </div>
          <div>
            <p className="bg-inherit text_light_green pt-2.5 px-10 ">
              Insurance Providers
            </p>
            <p className="opacity-50 bg-inherit text-gray-500 font-bold pt-1 px-10 ">
              {" "}
              Easly verify insurance claims and identify and avoid fraud with
              ease.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="w-3/4 justify-center form_div">
            <form
              className="w-3/4 mx-auto justify-between"
              onSubmit={handleSubmit}
            >
              <br />
              <label>
                <p className="lucid-font text-bold opacity-75 el_form_label pt-2 px-2.5">
                  Member Number:{" "}
                </p>
                <input
                  type="text"
                  placeholder="Membership Number"
                  name="membershipNumber"
                  value={formData.membership}
                  onChange={handleChange}
                  className="focus:outline-none ml-2 w-full text-black font-semibold opacity-75  el_form_input"
                />
              </label>
              <br />
              <label>
                <p className="lucid-font text-bold opacity-75 el_form_label pt-2 px-2">
                  Insurer Number:
                </p>
                <input
                  type="text"
                  name="insurerNumber"
                  placeholder="Insurer Number"
                  value={formData.insurerNumber}
                  onChange={handleChange}
                  className="focus:outline-none ml-2 w-full text-black font-semibold opacity-75  el_form_input"
                />
              </label>
              <br />
              <div className="flex justify-center">
                <button
                  className="text_light_green w-11/12 mt-5 mx-auto border rounded-full bg-green-500 h-10"
                  type="submit"
                >
                  <p className="text-white font-bold">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="extra"></div>
      <Team />
      <div className="extra"></div>
      {Data ? <DetailsCard data={Data} setDatta={setDatta} /> : <></>}
      <div className="extra"></div>

      <div className="extra"></div>
      <i className="pb-10 flex items-center justify-center">
        <span className="circle">&copy;</span>
        <span className="text-xs text-gray-500">
          G3 all rights reserved 2023
        </span>
      </i>
    </div>
  );
};

export default Home;
