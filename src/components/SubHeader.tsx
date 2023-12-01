"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SubHeader = () => {
  const [loader, setLoader] = useState(true);
  const [ismobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleHamburgerClick = () => {
    setShowDrawer(!showDrawer);
  };
  useEffect(() => {
    typeof window !== undefined && setIsMobile(window.screen.width <= 768);
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 500);

  const MenuBar = () => {
    return (
      <div className="md:bg-emerald-600 sticky top-11 md:py-8 bg-white py-4 flex justify-center gap-6">
        <Link
          href=""
          className="text-emerald-600 md:text-white hover:font-bold"
        >
          Home
        </Link>
        <Link
          href=""
          className="text-emerald-600 md:text-white hover:font-bold"
        >
          About Us
        </Link>
        <Link
          href=""
          className="text-emerald-600 md:text-white hover:font-bold"
        >
          Services
        </Link>
        <Link
          href=""
          className="text-emerald-600 md:text-white hover:font-bold"
        >
          News
        </Link>
        <Link
          href=""
          className="text-emerald-600 md:text-white hover:font-bold"
        >
          Contact
        </Link>
      </div>
    );
  };
  if (loader) return <></>;
  if (ismobile)
    return (
      <div className="bg-white md:px-20 px-6 flex justify-between py-2 items-center">
        <div className="flex gap-1">
          <p className=" font-semibold cursor-pointer">Homeo Clinic +</p>{" "}
          {/* <img src="/icons/capsules.png" alt="health" width={20} height={10} /> */}
        </div>
        <div>
          <img
            src="/icons/hamburger.png"
            alt=""
            width={20}
            onClick={handleHamburgerClick}
            className={showDrawer ? "active" : ""}
          />
        </div>
        {showDrawer && (
          <div className="drawer fixed top-0 left-0 h-screen w-full bg-white z-50">
            <div className="drawer-content flex flex-col h-full">
              <button
                className="close-drawer"
                onClick={() => setShowDrawer(false)}
              >
                <img src="/icons/close.png" alt="" width={20} />
              </button>

              {<MenuBar />}
            </div>
          </div>
        )}
      </div>
    );
  if (!ismobile) return <MenuBar />;
};

export default SubHeader;
