import { isDateInPast } from "@/utils";
import React, { useState } from "react";
import Loader from "./Loader";
import { useStorageUpload } from "@thirdweb-dev/react";
import { FaTimes } from "react-icons/fa";

function BuyTicket({ setShowBuyComponent }) {
  const { mutateAsync: upload } = useStorageUpload();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [status, setStatus] = useState("");
  const ticketDetails = {
    eventName: "eventName from props",
    description: "event description from props",
    image: "image uri from props",
    attributes: [
      {
        trait_type: "Full Name",
        value: name,
      },
      {
        trait_type: "Email",
        value: email,
      },
      {
        trait_type: "Phone Number",
        value: phone,
      },
      {
        trait_type: "Phone Number",
        value: phone,
      },
    ],
  };
  const buyTicket = async () => {
    // Get any data that you want to upload

    // And upload the data with the upload function
    setStatus("uploading");
    try {
      const uris = await upload({ data: [ticketDetails] });
      console.log(uris[0]);
      setStatus("buying");
      setTimeout(() => {
        setStatus("success");
      }, 5000);
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };
  return (
    <div className="relative container mx-auto mt-20 lg:w-1/2  w-full mb-6 lg:mb-0 sm:bg-gray-900 p-6 rounded-xl">
      <FaTimes
        onClick={() => setShowBuyComponent(false)}
        className="text-black bg-red-700 p-2 cursor-pointer rounded-full absolute -top-4 -right-4"
        size={35}
      />

      {/* <button className="absolute -top-4 -right-4 z-10 bg-white w-6 h-6 rounded-full p-4 "></button> */}
      <p className="uppercase  font-semibold mb-4 my-2">Buy Event Ticket </p>
      <form className="grid grid-cols-1 gap-x-4 gap-y-6 w-full md:grid-cols-2">
        <div>
          <label className="text-sm p-2" htmlFor="name">
            Name
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none "
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="text-sm p-2" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            value={email}
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none"
            placeholder="Your email address "
          />
        </div>
        <div>
          <label className="text-sm p-2" htmlFor="contact">
            Phone
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            id="contact"
            type="number"
            value={phone}
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none "
            placeholder="Enter your phone number"
          />
        </div>
      </form>

      <div className="text-sm">
        <p className="text-green-400 mb-3 mt-8">
          Please review your personal details before purchase
        </p>
        <div>
          <input
            id="group-size"
            autoComplete="off"
            onChange={(e) => setAgreement(e.target.checked)}
            value={agreement}
            type="checkbox"
          />
          <span className="ml-2">
            I agree with the event terms and conditions and privacy policy
          </span>
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={buyTicket}
            disabled={!agreement}
            className="px-10 lg:px-4 py-2 mt-4 disabled:opacity-70  w-full   bg-green-400 rounded-md"
          >
            Buy Ticket
          </button>
        </div>
        <div>
          {status === "uploading" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-blue-600 rounded-md">
              Uploading Ticket Details <Loader />
            </div>
          )}
          {status === "buying" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-blue-600 rounded-md">
              Creating Event <Loader />
            </div>
          )}
          {status === "success" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-green-600 rounded-md">
              You have successsfully purchased your ticket
            </div>
          )}
          {status === "error" && (
            <p className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-red-600 rounded-md">
              Error Occures. Try again Later <Loader />
            </p>
          )}
        </div>
        {/* {error && (
          <p className="my-4 text-red-500 text-center font-semibold">{error}</p>
        )} */}
      </div>
    </div>
  );
}

export default BuyTicket;
