import React from "react";
import { productList } from "../data/products";
import { Link } from "react-router-dom";
import {BsArrowUpShort} from "react-icons/bs"

const ProductCard = () => {
  const products = productList;

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {products?.map((item) => (
        <div
          className="w-[270px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm relative"
          key={item.id}
        >

        <div className="card-overlay absolute top-2 right-2 w-[30px] h-[30px] z-10 overflow-hidden">
          <BsArrowUpShort size={30} className="text-[#777] rotate-[45deg] hover:scale[1.05]" />
        </div>

          <div className="w-full">
            <div className="img-box border-b overflow-hidden">
              <img
                src={item.Img}
                alt={item.Title}
                className="w-[250px] hover:scale-[1.05] transition duration-300 "
              />
            </div>

            <div className="desc p-4 flex items-center justify-between">
              <Link to={`products/${item.id}`}>
                <h1 className="text-lg font-medium text-[#555] hover:underline">
                  {item.Cat}
                </h1>
              </Link>
              <span className="text-md font-medium text-indigo-500">
                $ {item.Price}
              </span>
            </div>

            <div className="w-full title px-4 pb-4">
              <h2 className="text-md text-[#777]">{item.Title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
