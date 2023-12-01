export default function Home() {
  return (
    <div className="p-3">
      <p className="text-4xl font-semibold text-center text-emerald-400  p-4">
        Our Products
      </p>
      <div className="flex gap-6 justify-center sm:flex-col md:flex-row">
        <img src="/p1.jpg" alt="" />
        <img src="/p2.jpg" alt="" />
        <img src="/p3.jpg" alt="" />
      </div>
    </div>
  );
}
