"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeaderPage = () => {
  const [loader, setLoader] = useState(true);
  const [ismobile, setIsMobile] = useState(false);
  useEffect(() => {
    typeof window !== undefined && setIsMobile(window.screen.width <= 768);
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 500);

  if (ismobile || loader) return <></>;
  if (!ismobile)
    return (
      <div className="sticky top-0 bg-white md:px-20 px-10 flex justify-between py-2 items-center">
        <div className="flex gap-1">
          <p className="text-lg font-semibold cursor-pointer">Homeo Clinic +</p>{" "}
          {/* <img src="/icons/capsules.png" alt="health" width={20} height={10} /> */}
        </div>

        <div className="hidden md:block">
          <Link className="hover:text-lime-600" href="">
            Help Desk{" "}
          </Link>
          <Link className="hover:text-lime-600" href="">
            | Energency Services{" "}
          </Link>
          <Link className="hover:text-lime-600" href="">
            | Appointment
          </Link>
        </div>

        {/* <div className="md:hidden">
        <button className="text-white bg-lime-600 px-4 py-2 rounded-md hover:bg-lime-700">
          Menu
        </button>
      </div> */}
      </div>
    );
};

export default HeaderPage;
