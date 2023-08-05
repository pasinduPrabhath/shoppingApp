// import React from "react";
// import icon from "../../icon/laptop.png";
// import cart from "../../icon/cart.png";

// const Header = () => {
//   return (
//     <header className="text-gray-600 body-font shadow-lg">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <img src={icon} alt="icon" className="w-10 h-10 mr-2" />{" "}
//           <span className="ml-3 text-xl">Lapzoid</span>
//         </a>
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900">Product</a>
//           <a className="mr-5 hover:text-gray-900">Second Link</a>
//           <a className="mr-5 hover:text-gray-900">Third Link</a>
//           <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//         </nav>
//         <button className="inline-flex   items-center bg-red-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-red-700 rounded text-base mt-4 md:mt-0">
//           Cart
//           <img src={cart} alt="icon" className="w-5 h-5 mr-2 ml-5" />{" "}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import icon from "../../icon/laptop.png";
import cart from "../../icon/cart.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={icon} alt="icon" className="w-10 h-10 mr-2" />{" "}
          <span className="ml-3 text-xl items-center">Lapzoid</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Product</a>
          {/* <Link to="/product" activeClassName="text-red-500" className="mr-5 hover:text-gray-900">DescriptionCard</Link> */}
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <div className="relative md:ml-auto md:mr-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-full border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mr-4 w-full md:w-64"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2"></button>
        </div>
        <button className="inline-flex   items-center bg-red-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-red-700 rounded text-base mt-4 md:mt-0">
          Cart
          <img src={cart} alt="icon" className="w-5 h-5 mr-2 ml-5" />{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
