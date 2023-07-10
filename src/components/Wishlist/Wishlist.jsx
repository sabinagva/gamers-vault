import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.css";

function WishlistList() {
  const dispatch = useDispatch();
  const wishlistReducer = useSelector((store) => store.wishlistReducer);

  useEffect(() => {
    // Fetch wishlist data when the component mounts
    dispatch({ type: "GET_WISHLIST" });
  }, []);

  const deleteGame = (wish) => {
    // Dispatch action to delete a game from the wishlist
    dispatch({ type: "DELETE_WISH", payload: wish.id });
  };

  const user = useSelector((store) => store.user);

  return (
    <>
      <h2>
        {" "}
        <span className="user">{user.username}'s </span>Wishlist Table
      </h2>
      <div class="nes-table-responsive">
        <table class="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Game</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wishlistReducer.map((wish, i) => {
              // Render a row for each wishlist item
              return (
                <tr key={i}>
                  <td>
                    {" "}
                    <img src={wish.image_url} alt="Game Cover" />
                  </td>
                  <td>{wish.game_name}</td>
                  <td>
                    <button
                      onClick={() => deleteGame(wish)}
                      type="button"
                      class="nes-btn is-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WishlistList;
