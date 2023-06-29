import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


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
        <div key={i}>
        <img src={wish.image_url} />
        {wish.game_name}
        </div> 
    ))}
    <p>hi</p>
</div>
);
}
export default WishlistList;