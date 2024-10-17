import React from "react";
import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="max-w-[375px] max-h-[700px] relative inline-block -mt-[1.73rem] overflow-hidden">
      <Image
        src="/images/bretify.jpg"
        alt="app"
        width={210}
        height={0}
        className="absolute top-[1.7rem] left-9 z-10"
      />

      <Image
        src="/images/hand_phone.png"
        alt="app"
        width={375}
        height={0}
        className="z-20 relative"
      />
    </div>
  );
}

