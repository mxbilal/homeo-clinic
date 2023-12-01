import { StaticImageData } from "next/image";
import React from "react";

interface product {
  id: number;
  img: StaticImageData;
}
interface productsProps {
  products: product[];
}
const Services = ({ products }: productsProps) => {
  return (
    <div>
      <p className="text-4xl font-semibold text-center p-4">Our Services</p>

      <div></div>
    </div>
  );
};

export default Services;
