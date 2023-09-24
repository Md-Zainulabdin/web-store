import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebaseContext";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";
import { addProductToast } from "../libs/toast";
import { Link } from "react-router-dom";

const CustomProductCard = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase.AllProducts().then((products) => setProducts(products.docs));
  }, []);

  const HandleAdd = (product) => {
    dispatch(addItem(product));
    addProductToast("Product Add Successfully");
  };
  return (
    <div className="w-full flex gap-6 flex-wrap py-8">
      {products.map((item) => (
        <div
          className="w-[270px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm relative"
          key={item.data().id}
        >
          <div className="w-full">
            <div className="img-box w-full h-[200px] object-cover flex justify-center items-center border-b overflow-hidden">
              <img
                src={item.data().image}
                alt={item.data().title}
                className="hover:scale-[1.05] transition duration-300 "
              />
            </div>

            <div className="desc py-2 px-4 flex items-center justify-between">
              <Link to={`/products/${item.data().id}`}>
                <h1 className="text-lg font-medium text-[#555] hover:underline">
                  {item.data().category}
                </h1>
              </Link>
              <span className="text-md font-medium text-indigo-500">
                ${item.data().price}
              </span>
            </div>

            <div className="w-full title px-4">
              <h2 className="text-md text-[#444] overflow-hidden whitespace-nowrap text-ellipsis">
                {item.data().title}
              </h2>
            </div>

            <div className="product-btn w-full p-3">
              <div
                onClick={() => HandleAdd(item.data())}
                className="border  hover:text-white hover:bg-[#111] transition duration-300  text-[#333] w-full rounded-md text-center flex items-center justify-center p-3"
              >
                <BiShoppingBag />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomProductCard;
