// import React from 'react'

// const Cart1 = () => {

//   return (
//       <>

//       <div class="grid grid-cols-4 bg-white">
//               <div class="col-start-1 col-end-4 bg-white-500">
//                 <div className="grid grid-cols-7 text-center my-8 mx-16 bg-gray-100">
//                   <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto"></div>
//                   <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-2">
//                   category
//                   </div>
//                   <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
//                   Item
//                   </div>

//                   <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
//                    Price
//                   </div>
//                 </div>

//                         <>
//                           <div >
//                             <div className="grid grid-cols-7 h-36 text-center m-16 mt-0 shadow-md rounded-md">
//                               <div className="flex justify-center font-medium items-center w-full col-span-1">
//                                 <img
//                                   src="http://bit.ly/2tMBBTd"
//                                   class="mr-3 h-28 ml-2"
//                                   alt=""
//                                 />
//                               </div>
//                               <div className="flex justify-center font-medium items-center w-full col-span-2">
//                                 <p class="block text-center ">Laptop_Bags</p>
//                               </div>
//                               <div className="flex justify-center font-medium items-center w-full  col-span-1">
//                                 <p class="block text-left ">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p></div>
//                               <div className="flex justify-center font-medium items-center w-full col-span-1">
//                                 <p class="block ml-10">Rs.3000.00</p>
//                               </div>
//                               <div className="flex justify-center font-medium items-center w-full col-span-1">
//                                 <p class="block ml-10">
//                                 </p>
//                               </div>

//                               <div className="flex justify-center font-medium items-center w-full col-span-1">
//                                 <button
//                                   className="hover:cursor "
//                                 >
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </>

//                   <>
//                     <div className="flex justify-end">
//                       <button

//                         className="mr-16 px-5 py-3 bg-orange-500 text-white rounded-md"
//                       >
//                         Clear Cart
//                       </button>
//                     </div>
//                   </>
//               </div>

//               <div class="col-start-4 col-end-5" aria-label="Sidebar">
//                 <div class="absolute left-3/4 ml-1 w-0.5 h-[33rem] mt-12 bg-gray-300"></div>

//                 <div class="overflow-y-auto py-4 px-3 bg-white dark:bg-white-800 h-screen border-l-2  sticky top-0 right-0">
//                   <div class="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
//                     Summary
//                   </div>
//                   <div class="flex-grow border-t border-gray-400"></div>

//                   <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
//                     <ul class="flex justify-between ">
//                       <li class="block  text-gray-600 ml-5">Sub-total</li>
//                       <li class="block  text-gray-600 mr-5">00LKR</li>
//                     </ul>
//                   </div>

//                   <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
//                     <ul class="flex justify-between ">
//                       <li class="block  text-gray-600 ml-5">Discount</li>
//                       <li class="block  text-gray-600 mr-5">00LKR</li>
//                     </ul>
//                   </div>

//                   <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
//                     <ul class="flex justify-between ">
//                       <li class="block  text-gray-600 ml-5">Total</li>
//                       <li class="block  text-gray-600 mr-5">00LKR</li>
//                     </ul>
//                   </div>

//                   <button

//                     className="flex flex-col p-1 ml-2 w-80 h-12 pl-24 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-orange-500 dark:bg-white shadow-xl"
//                   >
//                     Checkout
//                   </button>

//                 <br></br><br></br>

//                   <div class="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
//                     BUY NOW
//                   </div>
//                   <div class="flex-grow border-t border-gray-400"></div>

//                   <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
//                     <ul class="flex justify-between ">
//                     <form className="mb-5">
//                           <div className="mb-5">
//                             <label className="block text-sm font-medium text-gray-700">Address</label>
//                             <input
//                               className="mt-1 px-4 py-2 border rounded-lg w-full"
//                               type="text"

//                             />
//                           </div>

//                           <div className="mb-5">
//                             <label className="block text-sm font-medium text-gray-700">Contact number</label>
//                             <input
//                               className="mt-1 px-4 py-2 border rounded-lg w-full"
//                               type="text"

//                             />
//                           </div>

//                           <button

//                   className="flex flex-col p-1 ml-2 w-80 h-12 pl-24 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-orange-500 dark:bg-white shadow-xl"
//                 >
//                  BUY NOW
//                 </button>

//                         </form>

//                     </ul>
//                   </div>

//                 </div>
//               </div>

//             </div>
//       </>
//   )
// }

// export default Cart1

import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart1 = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = localStorage.getItem("userId");
        console.log("suer id" + userId);
        const response = await axios.post(
          "https://lapshopapp-f26f1576abb1.herokuapp.com/api/getProductsInCart",
          {
            id: 5,
          }
        );
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 bg-white">
        <div className="col-start-1 col-end-4 bg-white-500">
          <div className="grid grid-cols-7 text-center my-8 mx-16 bg-gray-100">
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto"></div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-2">
              category
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
              Item
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
              Price
            </div>
          </div>

          {cartItems.map((item) => (
            <div key={item.cartId}>
              <div className="grid grid-cols-7 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center w-full col-span-1">
                  <img
                    src={item.image}
                    className="mr-3 h-28 ml-2"
                    alt={item.title}
                  />
                </div>
                <div className="flex justify-center font-medium items-center w-full col-span-2">
                  <p className="block text-center ">{item.category}</p>
                </div>
                <div className="flex justify-center font-medium items-center w-full  col-span-1">
                  <p className="block text-left ">{item.title}</p>
                </div>
                <div className="flex justify-center font-medium items-center w-full col-span-1">
                  <p className="block ml-10">Rs. {item.price}</p>
                </div>
                <div className="flex justify-center font-medium items-center w-full col-span-1">
                  <button className="hover:cursor "></button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <button className="mr-16 px-5 py-3 bg-red-500 text-white rounded-md">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-start-4 col-end-5" aria-label="Sidebar">
          <div className="absolute left-3/4 ml-1 w-0.5 h-[33rem] mt-12 bg-gray-300"></div>

          <div className="overflow-y-auto py-4 px-3 bg-white dark:bg-white-800 h-screen border-l-2  sticky top-0 right-0">
            <div className="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
              Summary
            </div>
            <div className="flex-grow border-t border-gray-400"></div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <li className="block  text-gray-600 ml-5">Sub-total</li>
                <li className="block  text-gray-600 mr-5">00LKR</li>
              </ul>
            </div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <li className="block  text-gray-600 ml-5">Discount</li>
                <li className="block  text-gray-600 mr-5">00LKR</li>
              </ul>
            </div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <li className="block  text-gray-600 ml-5">Total</li>
                <li className="block  text-gray-600 mr-5">00LKR</li>
              </ul>
            </div>

            <button className="flex flex-col p-1 ml-2 w-80 h-12 pl-24 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-red-500 dark:bg-white shadow-xl">
              Checkout
            </button>

            <br></br>
            <br></br>

            <div className="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
              BUY NOW
            </div>
            <div className="flex-grow border-t border-gray-400"></div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <form className="mb-5">
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      className="mt-1 px-4 py-2 border rounded-lg w-full"
                      type="text"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact number
                    </label>
                    <input
                      className="mt-1 px-4 py-2 border rounded-lg w-full"
                      type="text"
                    />
                  </div>

                  <button className="flex flex-col p-1 ml-2 w-80 h-12 pl-24 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-red-500 dark:bg-white shadow-xl">
                    BUY NOW
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart1;
