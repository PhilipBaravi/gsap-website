"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

import AnimatedTitle from "./ui/animated-title";

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
  // GSAP Animation
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          <Image
            src="/img/about.webp" // Path to your image in the public folder
            alt="Background"
            layout="fill" // Makes the image fill the parent container
            objectFit="cover" // Ensures the image maintains aspect ratio
            className="absolute left-0 top-0 size-full object-cover"
            priority // Ensures the image loads faster as it's above the fold
          />
        </div>
      </div>
    </div>
  );
};

export default About;
