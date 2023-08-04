import React from "react";
import icon from "../../icon/laptopset.png";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font mt-20 ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Get the best deals on laptops and accessories at{" "}
            <span class="text-red-500">Lapzoid.</span>
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">
            At Lapzoid, we offer the best deals on high-quality laptops and
            accessories. Whether you're looking for a powerful gaming laptop, a
            sleek and lightweight ultrabook, or essential accessories like
            chargers and cases, we've got you covered.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
              Shop Now
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={icon}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
