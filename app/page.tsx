"use client";
import Image from "next/image";
import Ball from "../public/ball.png";
import Man from "../public/man-trophy.png";
import Menu from "../public/menu.png";
import Logo from "../public/logo.png";
import Stadium from "../public/stadium-opt.png";
import { SetStateAction, useEffect, useState } from "react";

export default function Home() {
  const [height, setHeight] = useState<SetStateAction<number>>();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight(); // set initial value
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <div style={{height:'10000px', backgroundColor:"black"}}>
      <video
        loop
        className="fixed left-0 w-full h-[100vh] object-cover"
        style={{
          transform: "rotate(180deg)",
        }}
        controls={false}
        autoPlay
        muted
        playsInline
      >
        <source src="./dust-particles.mp4" type="video/mp4"></source>
      </video>
      <div className="absolute top-[40%] -translate-y-1/2 left-[15vw]">
        <h1 className="font-[reedo] text-5xl  text-white font-[700]">
          <span>GLOBAL</span>
          <br />
          <span>FOOTBALL</span>
          <br />
          <span>AGENCY</span>
        </h1>
        <h2 className="font-[reedo] text-lg mt-[10px] text-[#CFF419] font-[700]">
          <span>BUILT FOR CLUBS,</span>
          <br />
          <span>BRANDS & PLAYERS</span>
          <br />
          <span>WHO WANT MORE</span>
        </h2>
      </div>
      <h2 className="font-[reedo] text-xs absolute top-[40%] -translate-y-1/2 left-[80vw] -translate-x-1/2 text-[#D9D9D9]">
        <span>
          We specialize in brokering high-impact sponsorships, building
          strategic partnerships, and activating untapped revenue opportunities
          across football's most valuable assets.
        </span>
        <br />
        <br />
        <span>
          From stadium naming rights and kit deals to culturally aligned brand
          campaigns, FittFind helps turn influence into income.
        </span>
      </h2>
      <Image
        src={Ball}
        alt="Football"
        className="absolute z-1 w-[100px] top-[140px] left-1/2 -translate-x-1/2"
      />
      <Image
        src={Man}
        alt="Man"
        className="absolute z-1 w-[300px] top-[200px] left-1/2 -translate-x-1/2"
      />
      <Image
        src={Menu}
        alt="Menu"
        className="absolute z-1 w-[50px] top-[50px] right-[50px]"
      />
      <Image
        src={Logo}
        alt="Logo"
        className="absolute z-1 w-[100px] top-[30px] left-1/2 -translate-x-1/2"
      />
      <Image
        src={Stadium}
        alt="Stadium"
        className="absolute z-0 w-full top-[100vh] left-1/2 -translate-x-1/2 transform-[scale(3)] origin-top opacity-[0.3]"
      />
      <div
        className="absolute z-2 left-1/2 -translate-x-1/2 top-[80%] flex justify-evenly items-center font-[reedo] text-xs"
        style={{
          width: "430px",
          height: "66px",
          rotate: "0 deg",
          borderRadius: "16px",
          backgroundColor: "#d9d9d914",
          backdropFilter: "blur(21.200000762939453px)",
        }}
      >
        <div className="hover:text-[#CFF419] cursor-pointer text-white">
          FOR BRANDS
        </div>
        <div className="hover:text-[#CFF419] cursor-pointer text-white">
          FOR PLAYERS
        </div>
        <div className="hover:text-[#CFF419] cursor-pointer text-white">
          FOR CLUBS
        </div>
      </div>
    </div>
  );
}
