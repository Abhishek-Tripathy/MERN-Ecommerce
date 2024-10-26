import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const { products, currency, addToCart, theme } = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className={`border-t-2 transition-opacity pt-10 ease-in duration-500 opacity-100 ${theme==='dark' ? "text-gray-100" : ""}`}>
      {/* Product Data */}
      <div className="flex gap-12 ms:gap-12 flex-col sm:flex-row">
        {/*------------ Product Images ------------------*/}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* ---------PRODUCT INFO------------ */}
        <div className="flex-1">
          <h1 className="mt-2 font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_dull_icon} className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className={`mt-5 ${theme==='dark' ? "text-gray-400" : "text-gray-500"} md:w-4/5`}>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button key={index} onClick={() => setSize(item)}
                className={`${theme === 'dark' ? "bg-gray-100 text-gray-900" : ""} border py-2 px-4  ${item === size ? "border-orange-600 bg-orange-100" : "bg-gray-100"}`}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)}
          className={`${theme==='dark' ? "bg-gray-100 text-gray-900" : "bg-black text-white active:bg-gray-700"} px-8 py-3 text-sm`}>ADD TO CART</button>
          <hr className="mt-8 sm:w-3/4"/>
          <div className={`text-sm ${theme==='dark' ? "text-gray-400" : "text-gray-500"} mt-5 flex flex-col gap-1`}>
            <p>100% original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* -------------Description & Review Section --------------*/}
      <div className="mt-20">
        <div className="flex">
          <b className="px-5 py-3 border text-sm">Description</b>
          <p className="px-5 py-3 border text-sm">Reviews(122)</p>
        </div>
        <div className={`flex flex-col gap-4 border p-6 text-sm ${theme==='dark' ? "text-gray-400" : "text-gray-500"}`}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem error vitae aliquid? Dolor veritatis numquam velit laborum, enim officia quibusdam quos </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt repellat ratione perspiciatis provident suscipit voluptatem dolore sit rem.</p>
        </div>
      </div>
      {/* ------------------Display Related Products ----------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
