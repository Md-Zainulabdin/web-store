import React, { useState } from "react";
import { useFirebase } from "../context/firebaseContext";
import { useRef } from "react";
import { async } from "@firebase/util";

const ProductForm = () => {
  const firebase = useFirebase();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const inputRef = useRef(null);

  const showInput = () => {
    inputRef.current.click();
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await firebase.handleCreateProduct(title, desc, price, image);
  };
  return (
    <div className="w-full border p-6 bg-white shadow-md">
      <div className="title">
        <h1 className="w-full text-3xl font-semibold text-[--text-color]">
          Add Product
        </h1>
      </div>
      <form
        onSubmit={formSubmitHandler}
        className="w-full flex flex-col gap-4 mt-4"
      >
        <div>
          <input
            type="text"
            placeholder="Enter product title.."
            required
            className="border outline-indigo-400 p-2 w-full rounded-md"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter product desc.."
            required
            className="border outline-indigo-400 p-2 w-full rounded-md"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Enter product price.."
            required
            className="border outline-indigo-400 p-2 w-full rounded-md"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className="my-2">
          <span
            onClick={showInput}
            className="border-2 border-indigo-400 px-3 py-1 rounded-full text-indigo-400 cursor-pointer"
          >
            Upload picture
          </span>
          <input
            ref={inputRef}
            onChange={handleImageInput}
            type="file"
            name="file"
            id="file"
            required
            className="hidden"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-center p-2 bg-indigo-500 text-white rounded-md"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
