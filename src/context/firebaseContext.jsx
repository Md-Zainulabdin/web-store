import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
const storage = getStorage(firebaseApp)
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const handleCreateProduct = async (title, desc, price, img) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${img.name}`);
    const imageResult = await uploadBytes(imageRef, img)

    await addDoc(collection(firestore, "products"), {
      title,
      desc,
      price,
      image: imageResult.ref.fullPath,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        handleCreateProduct,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
