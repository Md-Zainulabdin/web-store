import React from "react";
import { BiShoppingBag } from "react-icons/bi";

const RelatedProductCard = ({ relatedProducts }) => {
  return (
    <>
      {relatedProducts.map((item) => (
        <div
          className="w-[270px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm relative"
          key={item.id}
        >
          <div className="w-full">
            <div className="img-box border-b overflow-hidden">
              <img
                src={item.Img}
                alt={item.Title}
                className="w-[250px] hover:scale-[1.05] transition duration-300 "
              />
            </div>

            <div className="desc p-4 flex items-center justify-between">
              <h1 className="text-lg font-medium text-[#555] hover:underline">
                {item.Cat}
              </h1>
              <span className="text-md font-medium text-indigo-500">
                $ {item.Price}
              </span>
            </div>

            <div className="w-full title px-4 pb-4">
              <h2 className="text-md text-[#777]">{item.Title}</h2>
            </div>

            <div className="product-btn w-full p-4">
              <div className="border hover:border-indigo-400 hover:text-indigo-400 text-[#333] w-full rounded-md text-center flex items-center justify-center p-3">
                <BiShoppingBag />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedProductCard;
