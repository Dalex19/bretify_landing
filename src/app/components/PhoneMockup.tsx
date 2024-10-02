import React from "react";
import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="mockup-phone absolute -top-8 left-1/2 transform -translate-x-1/2">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <Image
            src="/images/bretify.jpg"
            alt="app"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
