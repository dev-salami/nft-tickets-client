"use client";
import TicketCard from "@/components/TicketCard";
import QrCode from "@/components/qrCode";
import { extractHashFromIpfsUrl } from "@/utils";
import axios from "axios";
import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";

function Page() {
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState(false);
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
    <section className="container mx-auto px-6">
      {/* <div className="w-fit mx-auto mt-10">
        Check for your ticket later
        <div className="mx-auto w-fit m-20">
          {metadata.eventName && <QrCode metadata={metadata} />}
        </div>
        <button onClick={() => getQr(data)}>Show Code</button>
      </div> */}

      <div className="grid gap-6 container mx-auto my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <TicketCard type="owned" />
        <TicketCard type="owned" />
        <TicketCard type="owned" /> <TicketCard type="owned" />
        <TicketCard type="owned" /> <TicketCard type="owned" />
        <TicketCard type="owned" />
      </div>
    </section>
  );
}

export default Page;
