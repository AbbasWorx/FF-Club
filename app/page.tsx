"use client";
import Image from "next/image";
import Ball from "../public/ball.png";
import Man from "../public/man-trophy.png";
import Menu from "../public/menu.png";
import Logo from "../public/logo.png";
import Stadium from "../public/stadium-opt.png";
import StadiumBrand from "../public/stadium.png";
import ForBrand from "../public/for-brand.png";
import PlayerHit from "../public/player-brand.png";
import { SetStateAction, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Home() {
  const [isPlayed, setIsPlayed] = useState(false);
  const ballRef = useRef(null);
  const playerHit = useRef(null);
  const forBrand = useRef(null);
  const stadiumBrand = useRef(null);
  const mainText = useRef(null);
  const mainSubText = useRef(null);
  const trophyMan = useRef(null);
  const cultureMeet = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { duration: 2 } });

    tl.current
      .to(ballRef.current, {
        top: "40vh",
        rotate: 90,
        width: "70px",
        ease: "power2.out",
      })
      .to(
        mainText.current,
        {
          left: "100%",
          ease: "power2.out",
        },
        0,
      )
      .to(
        mainSubText.current,
        {
          left: "100%",
          x: "100%",
          ease: "power2.out",
        },
        0,
      )
      .to(
        trophyMan.current,
        {
          top: "100%",
          ease: "power2.out",
        },
        0,
      )
      .fromTo(
        playerHit.current,
        {
          left: "-50%",
        },
        { left: "40%" },
        0,
      )
      .fromTo(
        forBrand.current,
        {
          left: "-50%",
        },
        { left: "10%" },
        0,
      )
      .fromTo(
        cultureMeet.current,
        {
          left: "-50%",
          x: 0,
        },
        { left: "80vw", x: "-50%" },
        0,
      )
      .fromTo(
        stadiumBrand.current,
        {
          left: "-100%",
        },
        { left: "0" },
        0,
      );
  }, []);

  const handleAnimation = () => {
    if (isPlayed) {
      tl.current?.reverse();
    } else {
      tl.current?.play();
    }
    setIsPlayed((curr) => !curr);
    // tl.current?.reverse();
  };
  return (
    <div style={{ height: "10000px", backgroundColor: "black" }}>
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
      <div
        ref={mainText}
        className="absolute top-[40%] -translate-y-1/2 left-[15vw]"
      >
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
      <div
        ref={mainSubText}
        className="absolute top-[40%] min-w-[300px] -translate-y-1/2 left-[80vw] -translate-x-1/2 "
      >
        <h2 className="font-[reedo] text-xs text-[#D9D9D9]">
          <span>
            We specialize in brokering high-impact sponsorships, building
            strategic partnerships, and activating untapped revenue
            opportunities across football's most valuable assets.
          </span>
          <br />
          <br />
          <span>
            From stadium naming rights and kit deals to culturally aligned brand
            campaigns, FittFind helps turn influence into income.
          </span>
        </h2>
      </div>
      <Image
        src={Ball}
        ref={ballRef}
        alt="Football"
        className="absolute z-1 w-[100px] top-[140px] left-1/2 -translate-x-1/2"
      />
      <Image
        src={Man}
        ref={trophyMan}
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
      <Image
        src={StadiumBrand}
        ref={stadiumBrand}
        alt="StadiumBrand"
        className="absolute w-full z-0 opacity-[0.3]"
      />
      <Image
        src={ForBrand}
        ref={forBrand}
        alt="ForBrand"
        className="absolute z-1 top-[20vh] w-[700px] origin-top"
      />
      <Image
        src={PlayerHit}
        ref={playerHit}
        alt="PlayerHit"
        className="absolute z-2 top-1/2 -translate-y-1/2 w-[510px] -translate-x-1/2 origin-top"
      />

      <h2
        ref={cultureMeet}
        className="absolute top-[25%] min-w-[300px] text-4xl -translate-y-1/2 text-[#CFF419] font-[700]"
      >
        CULTURE MEETS <br />
        COMMERCE
      </h2>
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
        <div
          className="hover:text-[#CFF419] cursor-pointer text-white"
          onClick={handleAnimation}
        >
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
