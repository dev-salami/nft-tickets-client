"use client";
import {
  MediaRenderer,
  useContract,
  useContractWrite,
  useStorageUpload,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Loader from "./Loader";
import { CiImageOn } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function CreateEvent() {
  const [name, setName] = useState("");
  const [eventImg, setEventImg] = useState("");
  const [vipTicketPrice, setVipTicketPrice] = useState("");
  const [code, setCode] = useState("");
  const [maxTicket, setMaxTicket] = useState(0);
  const [publicTicketPrice, setPublicTicketPrice] = useState("");
  const [status, setStatus] = useState("");

  const [agreement, setAgreement] = useState(false);
  const [file, setFile] = useState();
  const { mutateAsync: upload } = useStorageUpload();
  const { contract } = useContract(
    "0x22c57a199e26230BC53f40C1c3E7C80ffAB21609"
  );

  const { mutateAsync: createEvent, isCreatingEvent } = useContractWrite(
    contract,
    "createEvent"
  );

  const CreateEvent = async () => {
    try {
      setStatus("uploading");
      const uploadUrl = await upload({
        data: [file],
        options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
      });
      setEventImg(uploadUrl[0]);
      console.log(uploadUrl);

      setStatus("creating");
      const data = await createEvent({
        args: [
          name,
          code,
          uploadUrl[0],
          maxTicket,
          (Number(publicTicketPrice) * 1e18).toString(),
          (Number(vipTicketPrice) * 1e18).toString(),
        ],
      });
      // setTimeout(() => {
      //   setStatus("success");
      // }, 3);
      setStatus("success");

      console.log(uploadUrl);
      console.log(data);
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto mt-20 lg:w-1/2  w-full mb-6 lg:mb-0 sm:bg-white/5 p-6 rounded-xl">
      <p className="uppercase  font-semibold mb-4 my-2">Create Event</p>
      <form className="grid grid-cols-1 gap-x-4 gap-y-6 w-full md:grid-cols-2">
        <div>
          <label className="text-sm p-2" htmlFor="name">
            Event Name
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none "
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="text-sm p-2" htmlFor="event-code">
            Code
          </label>
          <input
            placeholder="Event Code"
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none"
            onChange={(e) => setCode(e.target.value)}
            type="text"
            value={code}
            name="event-code"
            id="event-code"
          />
        </div>
        <div>
          <label className="text-sm p-2" htmlFor="max-ticket">
            Max Ticket
          </label>
          <input
            placeholder="Maximum number of ticket"
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none"
            onChange={(e) => setMaxTicket(e.target.value)}
            type="number"
            value={maxTicket}
            name="max-ticket"
            id="max-ticket"
          />
        </div>
        <div>
          <label className="text-sm p-2" htmlFor="vipTicketPrice">
            VIP Ticket Price
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setVipTicketPrice(e.target.value)}
            id="vipTicketPrice"
            type="number"
            value={vipTicketPrice}
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none "
            placeholder="Price In MATIC"
          />
        </div>
        <div>
          <label className="text-sm p-2" htmlFor="publicTicketPrice">
            Public Ticket Price
          </label>
          <input
            placeholder="Price In MATIC"
            className="bg-transparent placeholder:text-sm w-full  focus:border-green-400 border rounded-md py-1 px-3 h-fit focus:outline-none"
            onChange={(e) => setPublicTicketPrice(e.target.value)}
            type="number"
            value={publicTicketPrice}
            name="publicTicketPrice"
            id="publicTicketPrice"
          />
        </div>
      </form>
      <>
        {eventImg ? (
          <MediaRenderer className="mt-4" src={eventImg} />
        ) : (
          <div className="">
            <div>
              <div className="w-full my-4">
                {file ? (
                  <div className="px-3 flex justify-between border py-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <span>{file.name}</span>
                      <CiImageOn size={25} />
                    </div>
                    <button onClick={() => setFile("")}>
                      <MdDelete size={20} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="dropzone-file"
                    className="flex gap-3   w-full  px-3 py-1   border border-gray-300  cursor-pointer bg-transparent rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                      Upload Event Ticket Image
                    </h2>
                    {/* <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 512x512px)
            </p> */}
                    <input
                      id="dropzone-file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        console.log(e.target.files[0]);
                      }}
                      type="file"
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        )}
      </>
      <div className="text-sm">
        <p className="text-green-400 mb-3 mt-8">
          Please review your registration details before submitting
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
        {status === "" && (
          <div className="flex justify-center md:justify-start">
            <button
              onClick={CreateEvent}
              disabled={!agreement}
              className="px-10 lg:px-4 py-2 mt-4 disabled:opacity-70  w-full   bg-green-400 rounded-md"
            >
              Create Event
            </button>
          </div>
        )}
        <div>
          {status === "uploading" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-blue-600 rounded-md">
              Uploading Event Image <Loader />
            </div>
          )}
          {status === "creating" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-blue-600 rounded-md">
              Creating Event <Loader />
            </div>
          )}
          {status === "success" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-green-600 rounded-md">
              Successful
            </div>
          )}
          {status === "error" && (
            <div className="px-10 lg:px-4 flex justify-center py-2 gap-3  mt-4   w-full   bg-red-600 rounded-md">
              Error Occures. Try again Later
            </div>
          )}
        </div>

        {/* {error && (
          <p className="my-4 text-red-500 text-center font-semibold">{error}</p>
        )} */}
      </div>
    </div>
  );
}

export default CreateEvent;
