import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllAdultInitiate,
  GetAllKidInitiate,
} from "../Redux/Action/ActionFilmadult";
const AdultApi = (refreshTokens, profile,allFilmAdult ) => {
  const dispatch = useDispatch();
  const { updateAdult} = useSelector((state) => state.adult);
  const [allCategory,setAllCategory]=useState([])
  useEffect(() => {
    if (updateAdult?.msg === "kid") {
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if (updateAdult?.msg === "adult") {
      dispatch(GetAllAdultInitiate(refreshTokens));
    } else if (updateAdult?.msg == "" || profile.adult == "kid") {
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if (updateAdult?.msg == "" || profile.adult == "adult") {
      dispatch(GetAllAdultInitiate(refreshTokens));
    }
  }, [updateAdult, refreshTokens, profile]);
  useEffect(()=>{
    var catall=[];
    allFilmAdult.forEach(element => {
    element.category.forEach(cat=>{
        catall.push(
          {
            id:cat._id,
            name:cat.name
          });
      })
    }) 
    const uniqueIds = [];
    const unique = catall.filter(element => {
      const isDuplicate = uniqueIds.includes(element.id);
    
      if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
      }
    
      return false;
    });
    setAllCategory(unique) 
  },[allFilmAdult])
  console.log(allCategory,'allCategory')
  return {
    cat:[allCategory,setAllCategory],
  };
};
export default AdultApi;
