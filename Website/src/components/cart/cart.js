import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";

const Cart1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0); // Initialize with 0
  const [discount, setDiscount] = useState(0); // Initialize with 0
  const [total, setTotal] = useState(0); // Initialize with 0
  const [showSessionTimeoutPopup, setShowSessionTimeoutPopup] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        //  const token = "wedwdeSS";
        console.log(token);
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const userId = localStorage.getItem("userId");
        console.log("suer id" + userId);
        const response = await axios.post(
          "https://lapshopapp-f26f1576abb1.herokuapp.com/api/getProductsInCart",
          {
            userId: userId,
          },
          {
            headers: headers,
          }
        );
        console.log(response.message);

        console.log(response.data);

        setCartItems(response.data.data);

        const fetchedCartItems = response.data.data;

        // Calculate subtotal by summing up prices of all items
        const calculatedSubtotal = fetchedCartItems.reduce(
          (acc, item) => acc + item.price,
          0
        );

        // Calculate discount (assuming 5%)
        const calculatedDiscount = calculatedSubtotal * 0.05;

        // Calculate total by subtracting discount from subtotal
        const calculatedTotal = calculatedSubtotal - calculatedDiscount;

        setCartItems(fetchedCartItems);
        setSubtotal(calculatedSubtotal);
        setDiscount(calculatedDiscount);
        setTotal(calculatedTotal);
      } catch (error) {
        console.error("Error fetching cart items:", error.response.status);
        if (error.response.status === 403) {
          setShowSessionTimeoutPopup(true);
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userId");
          localStorage.removeItem("username");
          // window.location.reload();
          return;
          //window.location.href = "/login";
        }
      }
    };

    fetchCartItems();
  }, []);

  // const clearCart = async () => {
  //   //const userId = "22";

  //   const userId = localStorage.getItem("userId");
  //   try {
  //     const response = await axios.post(
  //       "https://lapshopapp-f26f1576abb1.herokuapp.com/api/removeFromCart",
  //       {
  //         user_id: userId,
  //         //product_id: product_id,
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error deleting to cart:", error);
  //   }
  // };

  const removeItemById = async (id) => {
    //const userId = "22";
    const token = localStorage.getItem("token");
    //  const token = "wedwdeSS";
    console.log(token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const userId = localStorage.getItem("userId");
    const product_id = id;
    console.log("p id " + product_id);
    console.log(userId);
    try {
      const response = await axios.post(
        "https://lapshopapp-f26f1576abb1.herokuapp.com/api/removeFromCart",
        {
          userId: userId,
          productId: product_id,
        },
        {
          headers: headers,
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting to cart:", error);
    }
  };

  return (
    <>
      <ReactModal
        isOpen={showSessionTimeoutPopup}
        onRequestClose={() => setShowSessionTimeoutPopup(false)}
        // Add appropriate CSS styles and content for the popup
      >
        <h2>Session Timeout</h2>
        <p>Your session has expired. Please login again.</p>
        <button onClick={() => (window.location.href = "/login")}>
          Go to Login
        </button>
      </ReactModal>
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
                  <button
                    className="hover:cursor text-red-700 ml-8"
                    onClick={() => removeItemById(item.product_id)}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            {/* <button
              className="mr-16 px-5 py-3 bg-red-500 text-white rounded-md"
              onClick={clearCart}
            >
              Clear Cart
            </button> */}
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

            <div className="subtotal">
              <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
                <ul className="flex justify-between ">
                  <li className="block  text-gray-600 ml-5">Sub-total</li>
                  <li className="block  text-gray-600 mr-5">{subtotal}</li>
                </ul>
              </div>
            </div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <li className="block  text-gray-600 ml-5">Discount(5%)</li>
                <li className="block  text-gray-600 mr-5">{discount}LKR</li>
              </ul>
            </div>

            <div className="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul className="flex justify-between ">
                <li className="block  text-gray-600 ml-5">Total</li>
                <li className="block  text-gray-600 mr-5">{total}LKR</li>
              </ul>
            </div>

            <br></br>
            <br></br>

            <div className="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
              Order Now
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
