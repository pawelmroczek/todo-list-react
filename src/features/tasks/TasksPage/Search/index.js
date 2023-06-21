import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom"
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";


export default () => {
  const location= useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  
  const onInputChange = ({target}) => {
    const searchParams = new URLSearchParams(location.search);

    if(target.value.trim()=== ""){
      searchParams.delete(searchQueryParamName);
    }else{
      searchParams.set(searchQueryParamName, target.value);
    }

    history.replace(`${location.pathname}?${searchParams.toString()}`)
  }

  return (
    <Input
    placeholder="Filtruj zadania"
    value={query || ""}
    onChange={onInputChange}
    />
  )
}