import React from "react";
import { productList } from "../data/products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addItem} from "../Store/cartSlice"

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = productList;

  const onAddHandler = (product) => {
    dispatch(addItem(product))
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {products?.map((item) => (
        <div className="w-[250px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm" key={item.id}>
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

          <div className="add-to-cart-btn w-full text-center p-3">
            <button
              onClick={() => onAddHandler(item)}
              className="w-full border p-2 bg-[#111] text-white rounded-md hover:bg-[#222]"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
