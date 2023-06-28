const { useSelector, useDispatch } = require("react-redux")
import './SearchResult.css'

const SearchResult = () => {
    const gameListReducer = useSelector(store => store.gameListReducer)
    const dispatch =useDispatch();
return (
    <div>
      {gameListReducer.length !== 0 ? (
        <div> 
          {gameListReducer.map((game, i) => (
            <div key={i}>
              {game.cover && game.cover.url && <img src={game.cover.url} alt="Cover" />}
              <p>{game.name}</p>
              <div className='button-container'>
                 <button type="button" class="nes-btn is-primary" >Add to Wishlist</button>
                 <button type="button" class="nes-btn is-warning">Add to Catalog</button>
              </div>

              {/* <button onClick={() => {
                dispatch({ type: "ADD_CATALOG_GAME", payload: game.cover.url, gameName: game.name });
                dispatch({ type: "ADD_WISHLIST_GAME", payload: game.cover.url, gameName: game.name });
              }}>
                Add to Wishlist
              </button> */}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
      }
export default SearchResult