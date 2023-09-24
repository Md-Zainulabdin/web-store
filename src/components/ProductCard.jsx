import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpShort } from "react-icons/bs";
import { useFirebase } from "../context/firebaseContext";

const ProductCard = () => {
  const firebase = useFirebase();
  const [products, setProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    firebase.AllProducts().then((products) => setProducts(products.docs));
    const featuredItems = [];
    for (let i = 0; i <= 3; i++) {
      featuredItems.push(products[i]?.data());
    }

    if (featuredItems.length !== 0) {
      setFeaturedProduct(featuredItems);
    }
  }, []);


  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {featuredProduct?.map(
        (item) =>
          item && (
            <div
              className="w-[270px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm relative"
              key={item?.id}
            >
              <div className="card-overlay absolute top-2 right-2 w-[30px] h-[30px] z-10 overflow-hidden">
                <BsArrowUpShort
                  size={30}
                  className="text-[#777] rotate-[45deg] hover:scale[1.05]"
                />
              </div>

              <div className="w-full">
                <div className="img-box object-cover border-b overflow-hidden">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="hover:scale-[1.05] transition duration-300 "
                  />
                </div>

                <div className="desc p-4 flex items-center justify-between">
                  <Link to={`products/${item.id}`}>
                    <h1 className="text-lg font-medium text-[#555] hover:underline">
                      {item?.category}
                    </h1>
                  </Link>
                  <span className="text-md font-medium text-indigo-500">
                    $ {item?.price}
                  </span>
                </div>

                <div className="w-full title px-4 pb-4">
                  <h2 className="text-md text-[#777] overflow-hidden whitespace-nowrap text-ellipsis">
                    {item?.desc}
                  </h2>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductCard;
