"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Detail = () => {
  return (
    <div>
      <Navbar />

      <div className="px-4 sm:px-8 lg:px-12 py-24">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              className="w-full max-w-md lg:max-w-lg"
              src="rectangle.png"
              alt="Nike Air Force 1"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 flex flex-col lg:ml-36 justify-between">
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
              Nike Air Force 1
              <br />
              <span className="block">PLT.AF.ORM</span>
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "inside out"-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>

            <p className="text-2xl font-semibold text-gray-900 mb-4">
              ₹ 8 695.00
            </p>
              <div className="w-44">
            <Link href="Cart">
              <p className="flex justify-center items-center lg:w-auto border rounded-full bg-white text-black text-sm md:text-base font-medium py-3 px-6 hover:text-white hover:bg-black">
                Add To Cart
              </p>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
