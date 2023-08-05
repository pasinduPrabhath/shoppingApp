// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./modules/Home";
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import ProductCard from "./components/descriptionCard/descriptionCard";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//         <Route index element = {<Home/>}/>
//           <Route path="/product" element={<ProductCard />} />
//           {/* <Header />
//       <Home /> */}
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;
import React from "react";
import Header from "./components/Header";
import Home from "./modules/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/descriptionCard/descriptionCard";

import Cart from "./components/cart/cart";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />

          <Route path="/product" element={<ProductCard />} />
          <Route path="/product/:product_id" element={<ProductCard />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
