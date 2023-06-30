import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { store } from "./store";
import "./Bill.css";

const Bill = () => {
  const snapshot = useSnapshot(store);
  const [details, setDetails] = useState(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [amnt, setAmnt] = useState("");
  const [invoice, setInvoice] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      authorization: snapshot.edi_auth_guid,
      invoice_number: invoiceNumber,
      amount: parseFloat(amount),
    };
    setAmnt(amount);
    setInvoice(invoiceNumber);
    try {
      const response = await fetch("http://127.0.0.1:8000/reservations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        setDetails(data); // Save the response in the state variable
        console.log(data); // Log the response data
        // Clear the form by resetting the state values
        setInvoiceNumber("");
        setAmount("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  const handleBill = async () => {
    alert("Patient was billed and amount was reserved Successfully");
  }; 


  return (
    <div className="bill_body w-11/12 mx-auto flex  items-center">
      <div className="bill_div w-2/5">
        <div className="mt-7 flex flex-col justify-center items-center w-4/5 mx-auto">
          <p className="font-black text-4xl  el_form_label">
            Billing Information
          </p>
          <p className="text-gray-500 opacity-75 py-5 ">
            Enter Patients details below, Invoice number and Amount
          </p>
        </div>
        <form className="h-2/5 w-2/3 mx-auto mt-5" onSubmit={handleSubmit}>
          <label>
            <p className="text-gray-500 opacity-50 text-sm pb-5">
              {" "}
              Invoice Number:{" "}
            </p>
            <input
              type="text"
              className="inpt_form"
              placeholder="Invoice Number"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            <p className="text-gray-500 opacity-50 text-sm py-5"> Amount: </p>
            <input
              type="number"
              className="inpt_form"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <div className="w-11/12 mx-auto flex justify-center">
          <button
            className="mt-4 text_light_green w-11/12 mb-7 mx-auto border rounded-full bg-green-500 h-10"
            type="submit"
          >
            <p className="text-white font-bold">Submit</p>
          </button>
          </div>
        </form>
      </div>
     {details  && <div className="bill_div w-2/5">
      <div className="text_light_green success_div mt-2 bg-green-500 mx-auto w-3/4 h-16 flex items-center justify-center">
            <p className="text-white font-bold">Success!!</p>
            </div>
 <div className="w-3/4 h-4/5 mx-auto">
            <p className="pt-10 text-gray-500 opacity-75">
                You have successfully reserved: 
            </p>
            <div className="visit_value w-4/5 h-1/6 flex justify-between">
                     <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Amount</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">Ksh.{amnt} </p>
                     </div></div>
            </div>
            <div className="visit_value w-4/5 h-1/6 flex justify-between">
                     <div className="w-2/5 h-full flex  items-center">
                        <p className="text-gray-500 text-lg tracking-wider text-bold">Invoice Number</p>
                     </div>
                     <div className="h-full w-2/4 flex justify-between items-center">
                     <div className="visit_input w-full h-3/5 flex justify-center items-center">
                     <p className="text-gray-500 font-bold">{invoice}</p>
                     </div></div>
            </div>
            <p className="pt-10 text-gray-500 opacity-75">
                Kindly Dont exit this page until the patient has receaved and confirmed the details. If there was an error 
                cancel the reservation immediately with the button below.
            </p>
            <div className="mt-5 flex justify-center w-3/4 mx-auto">
            <button
            className="mt-4 text_light_green w-11/12 mb-7 mx-auto border rounded-full bg-green-500 h-10"
            onClick={handleBill}
          >
            <p className="text-white font-bold">Bill</p>
          </button>
            </div>
            </div>
      </div>}
    </div>
  );
};

export default Bill;
