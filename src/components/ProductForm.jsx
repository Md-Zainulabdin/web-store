import React, { useState } from "react";
import { useFirebase } from "../context/firebaseContext";
import { addProductToast } from "../libs/toast.js";
import { useRef } from "react";

const ProductForm = () => {
  const firebase = useFirebase();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [option, setOption] = useState("");
  const inputRef = useRef(null);

  const showInput = () => {
    inputRef.current.click();
  };

  const handleImageInput = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await firebase.handleCreateProduct(title, desc, price, option, image);
    addProductToast("Product Create Successfully");
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

        <div className="category">
          <select
            className="outline-0 border py-2 w-full px-3"
            required
            onChange={(e) => setOption(e.target.value)}
          >
            <option disabled selected>
              Select your Category
            </option>
            <option value="Smartphone" className="text-lg text-[#666]">
              Smartphone
            </option>
            <option value="laptop" className="text-lg text-[#666]">
              Laptop
            </option>
            <option value="power bank" className="text-lg text-[#666]">
              Power Bank
            </option>
            <option value="gaming" className="text-lg text-[#666]">
              Gaming
            </option>
            <option value="camera" className="text-lg text-[#666]">
              Camera
            </option>
          </select>
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
          {image && <span className="text-sm ml-6">Image Selected</span>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-center p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
