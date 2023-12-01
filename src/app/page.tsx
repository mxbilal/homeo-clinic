import Services from "@/components/Services";
// import p1 from "../../public/p1.jpg";
// import p2 from "../../public/p2.jpg";
// import p3 from "../../public/p3.jpg";

export default function Home() {
  // const [products, setProducts] = useState([
  //   // { id: 1, img: p1 },
  //   // { id: 2, img: p2 },
  //   // { id: 3, img: p3 },
  // ]);
  return (
    <div className="p-3">
      <p className="text-4xl font-semibold text-center text-emerald-400  p-4">
        Our Products
      </p>
      <div className="flex gap-6 justify-center sm:flex-col md:flex-row">
        {/* <Services products={products} /> */}
        <img src="/p1.jpg" alt="" />
        <img src="/p2.jpg" alt="" />
        <img src="/p3.jpg" alt="" />
      </div>
    </div>
  );
}
