import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <div className="md:px-20 px-10 flex justify-between py-2 items-center">
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
