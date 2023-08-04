import React from "react";

const Feature = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xl text-red-500 tracking-widest font-large title-font mb-1">
            Experience the Best of Online Shopping with Our
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            High-Quality Products, Fast Shipping, and Exceptional Customer
            Service
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <svg class="svg-icon fill-white " viewBox="0 0 20 20 ">
                    <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  High-Quality Products
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  At Lapzoid, trust that you're getting the best quality
                  products from top brands, rigorously tested and certified to
                  exceed your expectations.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Fast and Reliable Shipping
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  "Enjoy hassle-free shopping with Lapzoid's fast and reliable
                  worldwide shipping. Our shipping rates are competitive and
                  transparent, and you can track your order and receive updates
                  every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Exceptional Customer Service
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  At Lapzoid, our customer service team is available 24/7 to
                  assist you, and we are committed to providing prompt,
                  professional, and exceptional service to ensure your
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
