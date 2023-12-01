import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-96 flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url(/banner.jpg)" }}
    >
      <p className="text-4xl text-emerald-400 font-bold">
        Medical Services that you can trust
      </p>
      {/* <p className="text-lg sm:text-base">Clinic Info text</p> */}
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Read More
      </button> */}
    </div>
  );
};

export default Banner;
