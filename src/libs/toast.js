import { toast } from "react-toastify";

export const addProductToast = (text) => {
    return toast.success(text, {
        position: "bottom-center",
        autoClose: 2000,
        closeButton: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}