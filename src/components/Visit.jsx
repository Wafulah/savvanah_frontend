import React,{useState} from "react";
import { useSnapshot } from "valtio";
import { store } from "./store";
import "./Visit.css";
import { useNavigate } from "react-router-dom";

const Visit = () => {
  const snapshot = useSnapshot(store);
  const navigate = useNavigate();
  const memberData = snapshot.member_data;
  const [visitData, setVisitData] = useState(null);
  console.log(memberData);

  const handleClick = async () => {
    
    const url = "http://127.0.0.1:8000/create-authorization/";

    const dataToSend = {
      beneficiary_id: memberData.member.id,
      factors: ["OTP"],
      benefit_type: memberData.benefits[1].benefitType,
      benefit_code: memberData.benefits[1].benefitCode,
      policy_number: memberData.cover.policy_number,
      policy_effective_date: memberData.cover.validFrom,
      otp: store.otp,
      beneficiary_contact: memberData.member.contacts[0].contactValue,
      scheme_name: memberData.cover.schemeName,
      scheme_code: memberData.cover.scheme_code,
    };

   
   
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });


    const responseData = await response.json();
    console.log(responseData);
    setVisitData(responseData);

  };
  const handleCancel = () => {
    navigate('/');
    store.edi_auth_guid = visitData.edi_auth_guid;
  };
   
  const handleBill = async () => {
    navigate('/bill');
  }; 

  return (
    <div>
      <p className="head-text center_text">Start Visit</p>
      <div className="visit_body w-full">
        <div className="flex justify-between items-center h-full w-11/12 mx-auto">
          <div className="w-2/5 h-4/5 flex flex-col justify-between items-center">
            <div className="visit_div w-3/4 h-1/3 flex flex-col justify-between items-center">
              <p className="mt-4  lucid-font text-2xl text-bold opacity-75 el_form_label pt-2 px-2.5">
                Register Patient
              </p>
              <button
                className="text_light_green w-11/12 mb-7 mx-auto border rounded-full bg-green-500 h-10"
                onClick={handleClick}
              >
                <p className="text-white font-bold">Register</p>
              </button>
            </div>
            <div className="visit_div w-3/4 h-2/5 mt-16">
            <div className="flex justify-center">
            <p className="mt-4  lucid-font text-2xl text-bold opacity-75 el_form_label pt-2 px-2.5">
                Billing Section
              </p>
              </div>
              <div className="mt-10 flex justify-between">
              <button
                className="text_light_green w-2/5 mb-7 mx-auto border rounded-full bg-green-500 h-16"
                onClick={handleCancel}
              >
                <p className="text-white font-bold">Cancel</p>
              </button>
              <button
                className="text_light_green w-2/5 mb-7 mx-auto border rounded-full bg-green-500 h-16"
                onClick={handleBill}
              >
                <p className="text-white font-bold">Bill</p>
              </button>
              </div>
            </div>
          </div>
          {visitData && (
        <div className="w-2/4 h-4/5 flex items-center">
          <div className="visit_div w-11/12 h-full">
            <div className="text_light_green success_div mt-2 bg-green-500 mx-auto w-3/4 h-16 flex items-center justify-center">
            <p className="text-white font-bold">{visitData.status}!!</p>
            </div>
            <div className="visit_value w-4/5 h-1/6 flex justify-between">
                     <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Name</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{visitData.member_name}</p>
                     </div></div>
            </div>
            <div className="visit_value w-4/5 h-1/6 flex justify-between ">
            <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Member Number</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{visitData.member_number}</p>
                     </div></div>
            </div>
            <div className="visit_value w-4/5 h-1/6 flex justify-between">
            <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Service Type</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{visitData.service_type}</p>
                     </div></div>
            </div>
            <div className="visit_value w-4/5 h-1/6 flex justify-between">
            <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Scheme Name</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{visitData.scheme_name}</p>
                     </div></div>
            </div>

            <div className="visit_value w-4/5 h-1/6 flex justify-between">
            <div className=" w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wide text-bold">Wellness Member</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{visitData.is_wellness_member}</p>
                     </div></div>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Visit;
