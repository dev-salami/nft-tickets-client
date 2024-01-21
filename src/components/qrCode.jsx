import { QRCodeSVG } from "qrcode.react";
import React from "react";

function QrCode({ metadata }) {
  return (
    <QRCodeSVG
      className="border w-full h-full"
      value={JSON.stringify(metadata)}
    />
  );
}

export default QrCode;
