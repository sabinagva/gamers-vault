import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function WishlistList() {
    const dispatch = useDispatch();
const wishlistReducer = useSelector((store) => store.wishlistReducer);
 
useEffect(() => {
    dispatch({ type: "GET_WISHLIST"})
}, []);

const deleteGame = (wish) => {
    dispatch({type: 'DELETE_WISH', payload: wish.id})

}


return (
<div>
<h2> Wishlist Table</h2>
    {wishlistReducer.map((wish,i) => (      
        <div key={i}>
        <img src={wish.image_url} />
        {wish.game_name}
    <button onClick={() => deleteGame(wish)}
    type="button" class="nes-btn is-error">Delete
    </button>

        </div> 
    ))}
</div>
);
}
export default WishlistList;