import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ data }) => {
  return (
    <div>
      <div className="mx-auto w-1/3 small-head-text"> Patient Details</div>
      <div className="flex mt-20 cards_container">
        {/* member div */}
        <div className="card_div">
          <h2 className="font-bold opacity-75 text-2xl text-center py-5">
            Personal Information
          </h2>
          <div
            style={{ width: "95%" }}
            className="flex mx-auto justify-between"
          >
            <div className="w-1/3">
              <p className="font-bold py-2.5 ">Names</p>
              <p className="font-bold py-2.5">ID</p>
              <p className="font-bold py-2.5">Gender</p>
              <p className="font-bold py-2.5">Principal</p>
              <p className="font-bold py-2.5">Vip</p>
              <p className="font-bold py-2.5">Enrolled</p>
              <p className="font-bold py-2.5">Contact</p>
              <p className="font-bold py-2.5">isActive</p>
              <p className="font-bold py-2.5">Group</p>
              <p className="font-bold py-2.5">Category</p>
            </div>
            <div className=" w-3/4">
              <p className="font-bold py-2.5">
                {data.member.title}. {data.member.names}
              </p>
              <p className="font-bold py-2.5">{data.member.id}</p>
              <p className="font-bold py-2.5">{data.member.gender}</p>
              {data.member.isPrincipal ? (
                <p className="font-bold py-2.5">Yes</p>
              ) : (
                <p className="font-bold py-2.5">No</p>
              )}
              {data.member.isVip ? (
                <p className="font-bold py-2.5">Yes</p>
              ) : (
                <p className="font-bold py-2.5">No</p>
              )}
              {data.member.isEnrolled ? (
                <p className="font-bold py-2.5">Yes</p>
              ) : (
                <p className="font-bold py-2.5">No</p>
              )}
              <p className="font-bold py-2.5">
                {data.member.contacts[0].contactValue}
              </p>
              {data.member.isActive ? (
                <p className="font-bold py-2.5">Yes</p>
              ) : (
                <p className="font-bold py-2.5">No</p>
              )}
              <p className="font-bold py-2.5">{data.member.group}</p>
              <p className="font-bold py-2.5">{data.member.category}</p>
            </div>
          </div>
        </div>
        {/* cover div */}
        <div className="card_div">
          <h2 className="font-bold opacity-75 text-2xl text-center py-5">
            Cover Information
          </h2>
          <div
            style={{ width: "95%" }}
            className="flex mx-auto justify-between"
          >
            <div className="w-1/3">
              <p className="font-bold py-2.5">Policy No.</p>
              <p className="font-bold py-2.5">Sch. Name</p>
              <p className="font-bold py-2.5">Sch. code</p>
              <p className="font-bold py-2.5">Status</p>
              <p className="font-bold py-2.5">Valid From</p>
              <p className="font-bold py-2.5">Valid To</p>
            </div>
            <div className=" w-3/4">
              <p className="font-bold py-2.5">{data.cover.policyNumber}</p>
              <p className="font-bold py-2.5">{data.cover.schemeName}</p>
              <p className="font-bold py-2.5">{data.cover.schemeCode}</p>
              <p className="font-bold py-2.5">{data.cover.status}</p>
              <p className="font-bold py-2.5">
                {new Date(data.cover.validFrom).toLocaleDateString()}
              </p>
              <p className="font-bold py-2.5">
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
          <div
            style={{ width: "95%" }}
            className="flex mx-auto justify-between"
          >
            <div className="w-1/3">
              <p className="font-bold py-2.5">Name</p>
              <p className="font-bold py-2.5">Type</p>
              <p className="font-bold py-2.5">Balance</p>
              <p className="font-bold py-2.5">Limit</p>
              <p className="font-bold py-2.5">Copay Type</p>
              <p className="font-bold py-2.5">Copay Value</p>
              <p className="font-bold py-2.5">Applies To</p>
              <p className="font-bold py-2.5">Status</p>
              <p className="font-bold py-2.5">Visit Limit</p>
              <p className="font-bold py-2.5">Reserved</p>
            </div>
            <div className=" w-3/4">
              <p className="font-bold py-2.5">{data.benefits[0].benefitName}</p>
              <p className="font-bold py-2.5">{data.benefits[0].benefitType}</p>
              <p className="font-bold py-2.5">
                Ksh.{data.benefits[0].availableBalance}
              </p>
              <p className="font-bold py-2.5">
                Ksh.{data.benefits[0].benefitLimit}
              </p>
              <p className="font-bold py-2.5">{data.benefits[0].copayType}</p>

              <p className="font-bold py-2.5">
                Ksh.{data.benefits[0].copayValue}
              </p>
              <p className="font-bold py-2.5">
                {data.benefits[0].copayAppliesTo[0]}
              </p>
              <p className="font-bold py-2.5">{data.benefits[0].status}</p>
              <p className="font-bold py-2.5">
                Ksh.{data.benefits[0].visitLimit}
              </p>
              <p className="font-bold py-2.5">
                Ksh.{data.benefits[0].reservedAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
