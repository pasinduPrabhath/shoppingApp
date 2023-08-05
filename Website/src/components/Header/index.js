import React, { useState, useEffect } from "react";
import icon from "../../icon/laptop.png";
import cart from "../../icon/cart.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  //const history = useHistory();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the search term as a query parameter
    // history.push(`/search?term=${searchTerm}`);
  };

  useEffect(() => {
    // Fetch suggestions from the backend when the search term changes

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://lapshopapp-f26f1576abb1.herokuapp.com/api/searchByTitle/${searchTerm}`
        );
        const data = response.data;
        console.log(data);
        setSuggestions(data.data);
        console.log(data.data);
        console.log(suggestions.length);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    // Only fetch suggestions if the search term is not empty
    if (searchTerm) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={icon} alt="icon" className="w-10 h-10 mr-2" />{" "}
          <span className="ml-3 text-xl items-center">Lapzoid</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/product" className="mr-5 hover:text-gray-900">
            Product
          </Link>
          <Link to="/description-card" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/third-link" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <form
          onSubmit={handleSearchSubmit}
          className="relative md:ml-auto md:mr-auto"
        >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-100 rounded-full border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mr-4 w-full md:w-64"
          />
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.product_id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    console.log(suggestion.product_id);

                    setSearchTerm(suggestion.text);
                    setSuggestions([]);
                    window.location.reload();
                  }}
                >
                  <Link
                    //to="/product/${product_id}"
                    to={`/product/${suggestion.product_id}`}
                  >
                    {" "}
                    {suggestion.title}
                  </Link>
                  ;
                </li>
              ))}
            </ul>
          )}
        </form>
        <button className="inline-flex   items-center bg-red-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-red-700 rounded text-base mt-4 mr-5 md:mt-0">
          Cart
          <img src={cart} alt="icon" className="w-5 h-5 mr-2 ml-5" />{" "}
        </button>
        <button className="inline-flex   items-center  border-0 py-2 px-4 focus:outline-none text-black hover:bg-slate-200 rounded text-base mt-4 ml-4 md:mt-0">
          <a href="/login">Login</a>
        </button>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import icon from "../../icon/laptop.png";
// import cart from "../../icon/cart.png";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="text-gray-600 body-font shadow-lg">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <img src={icon} alt="icon" className="w-10 h-10 mr-2" />{" "}
//           <span className="ml-3 text-xl items-center">Lapzoid</span>
//         </a>

//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900">Product</a>
//           {/* <Link to="/product" activeClassName="text-red-500" className="mr-5 hover:text-gray-900">DescriptionCard</Link> */}
//           <a className="mr-5 hover:text-gray-900">Third Link</a>
//           <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//         </nav>
//         <div className="relative md:ml-auto md:mr-auto">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-100 rounded-full border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mr-4 w-full md:w-64"
//           />
//           <button className="absolute right-0 top-0 mt-2 mr-2"></button>
//         </div>
//         <button className="inline-flex   items-center bg-red-500 border-0 py-2 px-4 focus:outline-none text-white hover:bg-red-700 rounded text-base mt-4 md:mt-0">
//           Cart
//           <img src={cart} alt="icon" className="w-5 h-5 mr-2 ml-5" />{" "}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
