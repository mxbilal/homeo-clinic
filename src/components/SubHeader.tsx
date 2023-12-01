import Link from "next/link";
import React from "react";

const SubHeader = () => {
  return (
    <div className="md:bg-emerald-400 md:py-8 bg-white py-4 flex justify-center gap-6">
      <Link href="" className="text-emerald-600 md:text-white hover:font-bold">
        Home
      </Link>
      <Link href="" className="text-emerald-600 md:text-white hover:font-bold">
        About Us
      </Link>
      <Link href="" className="text-emerald-600 md:text-white hover:font-bold">
        Services
      </Link>
      <Link href="" className="text-emerald-600 md:text-white hover:font-bold">
        News
      </Link>
      <Link href="" className="text-emerald-600 md:text-white hover:font-bold">
        Contact
      </Link>
    </div>
  );
};

export default SubHeader;
