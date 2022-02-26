import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getSerialNumber = (pageNumber, index, size) =>{
    const i = Number(index) + 1
    const z = Number(size)
    let  num = Number(pageNumber) * z
    return (num + i) - z;
}

const Utils = {
    getSerialNumber,
}
export default Utils
