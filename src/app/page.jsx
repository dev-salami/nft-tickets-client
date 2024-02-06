"use client";
import React, { useState, useEffect } from "react";
import Qrcode, {
  Html5QrcodeScanner,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { readTicketData } from "@/helperFunctions";

const QrScanner = () => {
  const [qrCodeData, setQrCodeData] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const formatsToSupport = [
    Html5QrcodeSupportedFormats.QR_CODE,
    Html5QrcodeSupportedFormats.UPC_A,
    Html5QrcodeSupportedFormats.UPC_E,
    Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
  ];
  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        formatsToSupport: formatsToSupport,

        fps: 20,
      });

      scanner.render(success, error);
      function success(res) {
        setQrCodeData(res);
        // console.log(JSON.parse(res).name);
        console.log(res);

        scanner.clear();
      }

      function error(err) {
        console.log("err");
      }
    }
  }, [isScanning]);
  const handleScanClick = () => {
    setIsScanning(true);
  };

  return (
    <div>
      <button onClick={() => readTicketData()}>Test</button>
      <Header />
      <About />
      <Cta />
      <Footer />
      {/* <p>SCANNER</p>
      <div id="reader"></div>
      <button onClick={handleScanClick} disabled={isScanning}>
        {isScanning ? "Stop Scanning" : "Scan QR Code"}
      </button>
      {qrCodeData && <div>{JSON.stringify(qrCodeData)}</div>} */}
    </div>
  );
};

export default QrScanner;
