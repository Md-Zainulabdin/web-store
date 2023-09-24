import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/cartSlice";
import { addProductToast } from "../../libs/toast";
import RelatedProductCard from "../../components/RelatedProductCard";
import { useFirebase } from "../../context/firebaseContext";

const Product = () => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    firebase.AllProducts().then((products) => setAllProducts(products.docs));
    for (let i = 0; i <= allproducts?.length; i++) {
      if (allproducts[i]?.data()?.id == productId) {
        setProduct(allproducts[i]);
        break;
      }
    }

  }, [product]);


  // const relatedProducts = product.filter(
  //   (item) => item.Cat === product.Cat && item.id !== product.id
  // );

  // const addProducthandler = (product) => {
  //   dispatch(addItem(product));
  //   addProductToast(`product added succesfully`);
  // };
  return <div>hello world</div>;
};

export default Product;

{
  /* <div className="w-full flex flex-col gap-6 overflow-hidden">
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
            <RelatedProductCard relatedProducts={relatedProducts} />
          </div>
        </div>
      </div>
    </div> */
}
