import { useState } from "react";
import { useDispatch } from "react-redux"

function Search(){
    const dispatch = useDispatch();
    let [search, setSearch] = useState("")
    const searchGames = (event) => {
        event.preventDefault();
        dispatch({type: "GET_GAMES", payload: search})
        setSearch("")
    }
return (
   
    <div>
        <form onSubmit={searchGames}>
            <input type="text" 
            placeholder="search for games"
            //value={search}
            onChange={(event)=> setSearch(event.target.value)}  />
            <input type="submit" value="Search" />
           
        </form>
       
    </div>
)
}
export default Search