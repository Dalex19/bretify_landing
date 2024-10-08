import React from "react";
import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="mockup-phone  md:absolute md:-top-8 md:left-1/2 md:transform md:-translate-x-1/2">
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
