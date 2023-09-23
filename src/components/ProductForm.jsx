import React, { useState } from "react";
import { useRef } from "react";

const ProductForm = () => {
    const [image, setImage] = useState("");
    const inputRef = useRef(null);

    const showInput = () => {
       inputRef.current.click();
    }

    const handleImageInput = (e) => {
        const file = e.target.file[0];
    }
  return (
    <div className="w-full border p-6 bg-white shadow-md">
        <div className="title">
            <h1 className="w-full text-3xl font-semibold text-[--text-color]">Add Product</h1>
        </div>
      <form action="#" className="w-full flex flex-col gap-4 mt-4">
        <div>
          <input type="text" placeholder="Enter product title.." required className="border outline-indigo-400 p-2 w-full rounded-md" />
        </div>

        <div>
          <input type="text" placeholder="Enter product desc.." required className="border outline-indigo-400 p-2 w-full rounded-md" />
        </div>

        <div>
          <input type="number" placeholder="Enter product price.." required className="border outline-indigo-400 p-2 w-full rounded-md" />
        </div>

        <div className="my-2">
            <span onClick={showInput} className="border-2 border-indigo-400 px-3 py-1 rounded-full text-indigo-400 cursor-pointer">Upload picture</span>
            <input ref={inputRef} onChange={handleImageInput} type="file" name="file" id="file" className="hidden"/>
        </div>

        <div>
            <button type="submit" className="w-full text-center p-2 bg-indigo-500 text-white rounded-md">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
