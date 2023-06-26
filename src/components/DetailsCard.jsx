import React from "react";
import "./DetailsCard.css";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DetailsCard = ({ data, setDatta }) => {
  const navigate = useNavigate();
  const handleClearData = () => {
    setDatta(null);
  };

  const handleClick = () => {
    navigate("/otppage"); // Redirect to "/otppage" when the button is clicked
  };
  return (
    <div className="home_detail ">
      <button className="close-button" onClick={handleClearData}>
        <FaTimes className=" text-3xl" />
      </button>
      <div className="mx-auto w-3/4 mt-5">
        <p className="bg-inherit text_light_green smaller-head-text text-center">
          Patient Details
        </p>
      </div>
      <div className="block mt-5 cards_container">
        {/* member div */}
        <div className="card_div">
          <h2 className="font-black opacity-75 text-2xl text-center py-5">
            Personal Information
          </h2>
          <div className=" flex mx-auto justify-between">
            <div className="ml-5 w-1/3">
              <p className="text_light_green bg-transparent  font-black text-lg py-2.5 ">
                Name:
              </p>
              <p className="text_light_green bg-transparent  font-black text-lg py-2.5">
                ID:
              </p>
              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Gender:
              </p>

              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Contact:
              </p>
            </div>
            <div className=" w-3/4">
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.member.title}. {data.member.names}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.member.id}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.member.gender}
              </p>

              <p className="font-black text-lg opacity-75 py-2.5">
                {data.member.contacts[0].contactValue}
              </p>
            </div>
          </div>
        </div>
        {/* cover div */}
        <div className="card_div">
          <h2 className="font-bold opacity-75 text-2xl text-center py-5">
            Cover Information
          </h2>
          <div className="flex mx-auto justify-between">
            <div className="xl:w-1/3 ml-5 w-2/5">
              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Policy No.
              </p>

              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Status.
              </p>
              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Valid From.
              </p>
              <p className="text_light_green bg-transparent font-black text-lg py-2.5">
                Valid To.
              </p>
            </div>
            <div className="xl:w-3/4 w-3/5">
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.cover.policyNumber}
              </p>

              <p className="font-black text-lg opacity-75 py-2.5">
                {data.cover.status}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {new Date(data.cover.validFrom).toLocaleDateString()}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {new Date(data.cover.validTo).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        {/* benefits div */}
        <div className="card_div">
          <h2 className="font-bold opacity-75 text-2xl text-center py-5">
            Benefits Information
          </h2>
          <div className="flex mx-auto justify-between">
            <div className="ml-5 w-1/3">
              <p className="text_light_green bg-transparent font-black text-lg  py-2.5">
                Name:
              </p>
              <p className="text_light_green bg-transparent font-black text-lg  py-2.5">
                Type:
              </p>

              <p className="text_light_green bg-transparent font-black text-lg  py-2.5">
                Applies:
              </p>
              <p className="text_light_green bg-transparent font-black text-lg  py-2.5">
                Status:
              </p>
            </div>
            <div className=" w-3/4">
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.benefits[0].benefitName}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.benefits[0].benefitType}
              </p>

              <p className="font-black text-lg opacity-75 py-2.5">
                {data.benefits[0].copayAppliesTo[0]}
              </p>
              <p className="font-black text-lg opacity-75 py-2.5">
                {data.benefits[0].status}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 w-3/4 mx-auto">
      <button
      className="sm:h-20  text_light_green w-full  mx-auto border rounded-full bg-green-500 h-10"
      type="button"
      onClick={handleClick}
    >
      <p className="sm:text-3xl text-white font-bold">Verify</p>
    </button>
    </div>
    </div>
  );
};

export default DetailsCard;
