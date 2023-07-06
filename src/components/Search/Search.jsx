import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import SearchResult from "../SearchResult/SearchResult";
import './Search.css'

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
        <form className="nes-container with-title cover"  onSubmit={searchGames}>
        <span  class="titles" >Search for Game</span>
            <input className="nes-container with-title" type="text" 
            placeholder="search for games"
            value={search}
            onChange={(event)=> setSearch(event.target.value)}  />
            
            <input  type="submit"  className="nes-btn is-primary" value="Search" style={{ marginLeft: '30px' }}/>
            
           
        </form>
        <SearchResult/>       
    </div>
)
}
export default Search