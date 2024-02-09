import React, { useState } from "react";
import ticket from "../../public/assets/tickets.jpg";
import Image from "next/image";
import QrCode from "./qrCode";
import { extractHashFromIpfsUrl } from "@/utils";
import axios from "axios";
import BuyTicket from "./buyTicket";
import { MediaRenderer } from "@thirdweb-dev/react";
const TicketCard = ({ type, contractAddress, eventImg }) => {
  const [loading, setLoading] = useState(false);
  const [showBuyComponent, setShowBuyComponent] = useState(false);

  const [metadata, setMetadata] = useState("");
  const data = "ipfs://QmXbqMMtQXNhU1r9EQdTuu6BBgD3R3PLUW2NdAAhRsGLxw/0";

  const getQr = (uri) => {
    setLoading(true);
    const hash = extractHashFromIpfsUrl(uri);
    axios
      .get(
        `https://${process.env.NEXT_PUBLIC_CLIENT_ID}.ipfscdn.io/ipfs/${hash}`
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setMetadata(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <section className="w-full flex flex-col justify-center p-3 ">
      <MediaRenderer className="w-fit mx-auto " src={eventImg} />
      <></>
      {metadata.eventName && (
        <div
          onClick={() => setMetadata("")}
          className="fixed bg-black inset-0 w-full flex justify-center items-center"
        >
          <div className="mx-auto relative z-10 w-full sm:w-3/4 md:w-1/3 h-auto   px-10">
            {<QrCode metadata={metadata} />}
            <button className="absolute bg-red-600 w-6 h-6 right-4 -translate-x-1/2 -translate-y-1/2  top-0">
              Delete
            </button>
          </div>
        </div>
      )}
      {showBuyComponent && (
        <div className="fixed bg-black/80 inset-0 w-full flex justify-center items-center">
          <BuyTicket
            setShowBuyComponent={setShowBuyComponent}
            contractAddress={contractAddress}
          />
        </div>
      )}
      {/* <BuyTicket /> */}

      {type === "purchase" ? (
        <button
          onClick={() => setShowBuyComponent(true)}
          className="bg-green-600 w-full rounded-xl px-2 py-1 font-semibold "
        >
          Buy for 0.001 MATIC
        </button>
      ) : (
        <button
          onClick={() => getQr(data)}
          className="bg-green-600 w-full rounded-xl px-2 py-1 font-semibold"
        >
          View QR
        </button>
      )}
    </section>
  );
};

export default TicketCard;
