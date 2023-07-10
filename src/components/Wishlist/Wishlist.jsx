import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.css";

function WishlistList() {
  const dispatch = useDispatch();
  const wishlistReducer = useSelector((store) => store.wishlistReducer);

  useEffect(() => {
    dispatch({ type: "GET_WISHLIST" });
  }, []);

  const deleteGame = (wish) => {
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
              //   const wImage = wish.image_url;
              //   const finalUrl = wImage && wImage.replace('/t_thumb/', '/t_cover_big/');
              return (
                <tr key={i}>
                  <td>
                    {" "}
                    <img src={wish.image_url} />
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
