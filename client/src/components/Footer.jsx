import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function Footer() {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className={`w-full md:w-2/3 ${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non
            quae distinctio possimus! Fugit aperiam atque sunt.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className={`flex flex-col gap-1 cursor-pointer ${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/collection'}>Collection</Link></li>
            <li><Link to={'/privacy'}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className={`flex flex-col gap-1 ${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>
            <li>+91-782-392-2138</li>
            <li>abc@customersupport.com</li>
          </ul>
        </div>
      </div>
      <div>
         <hr />
         <p className="text-sm py-5 text-center"> Copyright 2024 @Company.com - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
