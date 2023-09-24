import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyCM4hT1e7cmCwi67UZEL1LeRfSkol_ipcA",
  authDomain: "web-store-bd2e2.firebaseapp.com",
  projectId: "web-store-bd2e2",
  storageBucket: "web-store-bd2e2.appspot.com",
  messagingSenderId: "353595132407",
  appId: "1:353595132407:web:04474a3c9e90d5618906f2",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const handleCreateProduct = async (title, desc, price, option, img) => {
    await addDoc(collection(firestore, "products"), {
      id: nanoid(),
      title,
      desc,
      price,
      category: option,
      image: img,
    });
  };

  const AllProducts = () => {
    return getDocs(collection(firestore, "products"));
  };

  return (
    <FirebaseContext.Provider
      value={{
        handleCreateProduct,
        AllProducts,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
