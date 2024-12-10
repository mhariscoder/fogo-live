import { toast } from "react-toastify";

export const success = (msg) =>
    toast.success(msg, {
        hideProgressBar: true,
        autoClose: 1500,
        position: "top-right",
    });

export const info = (msg) =>
    toast.info(msg, {
        hideProgressBar: true,
        autoClose: 1500,
        position: "top-center",
    });

export const errorToast = (msg) =>
    toast.error(msg, {
        hideProgressBar: true,
        autoClose: 1500,
        position: "top-center",
    });

export const warning = (msg) =>
    toast.warning(msg, {
        hideProgressBar: true,
        autoClose: 1500,
        position: "top-center",
    });