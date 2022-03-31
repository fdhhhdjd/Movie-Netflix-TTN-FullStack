import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetAllAdultInitiate,GetAllChildrenInitiate } from "../Redux/Action/ActionFilmadult";
const AdultFilmAPI = (token) => {
  const dispatch = useDispatch();
  const [call, setCall] = useState(false);
  const { SelectFilm } = useSelector((state) => state.adult);
  console.log(SelectFilm,'Global')
  useEffect(() => {
      if( SelectFilm.msg=="Selected: kid"){
        dispatch(GetAllChildrenInitiate(token))
      }else if(SelectFilm.msg=="Selected: adult"){
        dispatch(GetAllAdultInitiate(token))
      }
  }, [SelectFilm]);

  return {
    call: [call, setCall],
  };
};
export default AdultFilmAPI;