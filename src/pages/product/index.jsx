import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productList } from "../../data/products";
import { AiOutlineShopping } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState(productList);

  for (let i = 0; i <= product.length; i++) {
    if (product[i].id === +productId) {
      setProduct(product[i]);
      break;
    }
  }

  const relatedProducts = productList.filter(
    (item) => item.Cat === product.Cat && item.id !== product.id
  );

  const addProducthandler = (product) => {
    dispatch(addItem(product));
  };
  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden">
      <div className="row1 flex flex-col md:flex-row gap-6 mt-8">
        <div className="img w-full md:w-[50%] flex justify-center items-center border-r">
          <img src={product.Img} alt={product.Title} className="w-[500px]" />
        </div>

        <div className="desc w-full md:w-[50%] flex flex-col gap-4 items-left p-6">
          <div className="title">
            <h1 className="text-2xl font-semibold text-[#333]">
              {product.Title}
            </h1>
          </div>
          <div className="category flex gap-2">
            <h2 className="text-xl font-medium text-[#555]">Category: </h2>
            <p className="text-lg font-medium text-indigo-300">{product.Cat}</p>
          </div>

          <div className="price">
            <span className="text-xl text-indigo-400">${product.Price}</span>
          </div>

          <div className="add-to-cart mt-4">
            <button
              onClick={() => addProducthandler(product)}
              className="text-md px-6 py-3 bg-[#111] text-white rounded-md flex items-start gap-3 hover:bg-[#222]"
            >
              <span>Add to cart</span>
              <AiOutlineShopping size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="row2 py-6">
        <div className="related-product flex flex-col gap-6">
          <div className="title">
            <h1 className="text-2xl font-semibold text-[#333]">
              Related Product
            </h1>
          </div>

          <div className="product w-full flex flex-wrap gap-8">
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
                    <div className="border hover:border-indigo-400 hover:text-indigo-400 text-[#333] w-full rounded-md text-center flex items-center justify-center p-3"><BiShoppingBag/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
