import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function CatalogList() {
    const dispatch = useDispatch();
const catalogReducer = useSelector((store) => store.catalogReducer);
 console.log('catalog reducer is', catalogReducer)
useEffect(() => {
    dispatch({ type: "GET_CATALOG"})
}, []);
return (
<div>
<h2> PLAYED GAMES</h2>
    {catalogReducer?.map((catalog,i) => (      
        <div key={i}>
       <img src={catalog.image_url}/> 
        {catalog.played_game_name}   
       </div>
    ))}
    <p>hi</p>
</div>
);
}
export default CatalogList;

