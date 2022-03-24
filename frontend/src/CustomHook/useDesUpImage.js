import {useContext,useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import {UploadImg,DestroyImg} from '../imports/import'
import { toast } from 'react-toastify';
const useUpDesImage = (token)=>{
    const [loading,setLoading] = useState(false);
    const [images,setImages] = useState(false);
    const handleUpload = async (e)=>{
        e.preventDefault();
        try{
            const file = e.target.files[0];
            if(!file) return swal("file not exist", {
                icon: "error",
              });
            if(file.size > 1024 * 1024)
            return  swal("Size to large", {
                icon: "error",
              });
            if(file.type !=="image/jpeg" && file.type !=="image/png")
            return  swal("file format is incorrect", {
                icon: "error",
              });
            let formData = new FormData();
            formData.append("file", file);
            setLoading(true);
            const res =await axios.post(UploadImg(),formData,{
                headers:{
                    "content-type": "mutipart/form-data",
                    Authorization:`${token}`,
                }
            });
            setLoading(false);
            setImages(res.data);

        }catch(err){
            toast.error(err.response.data.msg);
        }
    };
    const handleDestroy = async () => {
        try{
            setLoading(true);
            await axios.post(
                DestroyImg(),
                {public_id:images.public_id},
                {
                    headers:{
                        Authorization:`${token}`,
                    },
                }
            );
            setLoading(false);
            setImages(false);

        }catch(err){
            toast.error(err.response.data.msg);
        }
    };
    return{loading,handleUpload,handleDestroy,images,setImages,setLoading}
}
export default useUpDesImage;