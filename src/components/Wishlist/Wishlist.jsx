import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlistListItem from "../WishlistItem/WishlistItem"

function WishlistList() {
    const dispatch = useDispatch();
const wishlistReducer = useSelector((store) => store.wishlistReducer);
 
useEffect(() => {
    dispatch({ type: "GET_WISHLIST"})
}, []);
return (
<div>
<h2> Wishlist Table</h2>
    {wishlistReducer.map((wish,i) => (      
        <p>
        {wish.game_name}
        </p> 
    ))}
    <p>hi</p>
</div>
);
}
export default WishlistList;