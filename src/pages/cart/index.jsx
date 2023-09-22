import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const itemRemoveHandler = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className="w-full px-[30px]">
      <div className="cart-title py-8">
        <h1 className="w-full text-left text-2xl font-semibold text-[--text-color]">
          Your Cart Items
        </h1>
      </div>

      <div className="cart-items w-full border">
        {cartProducts.map((item) => (
          <div
            className="w-full flex items-center gap-8"
            key={item.id}
          >
            <div className="img">
              <img src={item.Img} alt={item.Cat} className="w-[180px]" />
            </div>

            <div className="title flex flex-col gap-2 text-left">
              <h1 className="text-xl font-semibold text-[#333]">{item.Cat}</h1>
              <p className="text-lg font-semibold text-[#777]">${item.Price}</p>
            </div>

            <div className="removeBtn">
              <button
                onClick={() => itemRemoveHandler(item.id)}
                className="border-2 p-2 border-red-400"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
