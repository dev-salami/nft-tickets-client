"use client";
import React, { useState } from "react";
import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import axios from "axios";
import QrCode from "./qrCode";

function TicketDetail() {
  const [metadata, setMetadata] = useState({});
  const { mutateAsync: upload } = useStorageUpload();
  const ticketDetails = {
    name: "Random NFT",
    description: "A randomly generated NFT metadata",
    image:
      "https://ipfs.io/ipfs/QmZ7bhmsDsbZVVTGHZ6ZWp5jqbMv3kM1oKpYpACuQB6rTb",
    attributes: [
      {
        trait_type: "Color",
        value: "Blue",
      },
      {
        trait_type: "Shape",
        value: "Circle",
      },
      {
        trait_type: "Background",
        value: "Gradient",
      },
      {
        trait_type: "Edition",
        value: "1 of 1",
      },
    ],
    external_url: "https://example.com/random-nft",
  };

  const uploadData = async () => {
    // Get any data that you want to upload

    // And upload the data with the upload function
    try {
      const uris = await upload({ data: [ticketDetails] });
      console.log(uris);
    } catch (error) {
      console.log(error);
    }
  };

  const getQr = (uri) => {
    axios
      .get(
        `https://${process.env.NEXT_PUBLIC_CLIENT_ID}.ipfscdn.io/ipfs/QmYnKxc12n3KVJWK3j3XxV6oDbFy6eHC2ezt1gDAAzFoYj/0/`
      )
      .then((res) => {
        console.log(res.data);
        setMetadata(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button onClick={uploadData}>upload Ticket details</button> <br />
      <button onClick={getQr}>getQr</button>
      <div className="mx-auto w-fit">
        {metadata.name && <QrCode metadata={metadata} />}
      </div>
    </>
  );
}

export default TicketDetail;
