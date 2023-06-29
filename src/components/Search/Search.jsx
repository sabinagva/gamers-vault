import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import SearchResult from "../SearchResult/SearchResult";

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
        <p></p>
        <form className="nes-container with-title" onSubmit={searchGames}>
        <span class="title">Search for Game</span>
            <input className="nes-container with-title" type="text" 
            placeholder="search for games"
            value={search}
            onChange={(event)=> setSearch(event.target.value)}  />
            <input type="submit"  class="nes-btn is-primary" value="Search" />
            
           
        </form>
        <SearchResult/>       
    </div>
)
}
export default Search