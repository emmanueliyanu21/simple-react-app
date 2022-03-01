import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getSerialNumber = (pageNumber, index, size) =>{
    const i = Number(index) + 1
    const z = Number(size)
    let  num = Number(pageNumber) * z
    return (num + i) - z;
}

const warningNotification = (message) =>{
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}


const Utils = {
    getSerialNumber,
    warningNotification
}
export default Utils
