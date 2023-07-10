const { useSelector, useDispatch } = require("react-redux");
import "./SearchResult.css";

const SearchResult = () => {
  // Access gameListReducer state from Redux store
  const gameListReducer = useSelector((store) => store.gameListReducer);
  const dispatch = useDispatch();

  // Dispatch action to add a game to the wishlist
  const addToWishlist = (game) => {
    dispatch({ type: "ADD_WISHLIST", payload: game });
  };

  // Dispatch action to add a game to the catalog
  const addToCatalog = (game) => {
    dispatch({ type: "ADD_CATALOG", payload: game });
  };

  return (
    <>
      <br />
      <br />
      <div>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Summary</th>
                <th>Game</th>
                <th>Add to Wishlist</th>
                <th>Add to Catalog</th>
              </tr>
            </thead>
            <tbody>
              {gameListReducer.length !== 0 ? (
                // Render game results if there are games in the list
                gameListReducer.map((game, i) => {
                  const image = game.cover?.url;
                  const finalUrl =
                    image && image.replace("/t_thumb/", "/t_cover_big/");

                  return (
                    <tr key={i}>
                      <td>
                        {game.cover && game.cover.url && (
                          <img src={finalUrl} alt="Cover" />
                        )}
                      </td>
                      <td>{game.summary}</td>
                      <td>{game.name}</td>
                      <td className="button-container">
                        <button
                          onClick={() => addToWishlist(game)}
                          type="button"
                          className="nes-btn is-primary"
                        >
                          Add to Wishlist
                        </button>
                      </td>
                      <td className="button-container">
                        <button
                          onClick={() => addToCatalog(game)}
                          type="button"
                          className="nes-btn is-primary"
                        >
                          Add to Catalog
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                // Render "No games" message if there are no games in the list
                <tr>
                  <td colSpan="4">No games</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
