"use client";
import React from "react";
import { gsap } from "gsap";

export default function Home() {
  const onEnter = ({ currentTarget }: { currentTarget: any }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.1 });
  };

  const onLeave = ({ currentTarget }: { currentTarget: any }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };
  return (
    <div className="p-3">
      <p className="text-4xl font-semibold text-center text-emerald-400  p-4">
        Our Products
      </p>
      <div className="flex gap-6 justify-center sm:flex-col md:flex-row pb-12">
        <img
          src="/p1.jpg"
          alt=""
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
        <img
          src="/p2.jpg"
          alt=""
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
        <img
          src="/p3.jpg"
          alt=""
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
      </div>
    </div>
  );
}
