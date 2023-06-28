const { takeLatest } = require("redux-saga/effects");
import axios from 'axios';
function* fetchWishlist() {
    try {
        console.log('fetching wishlist games');
        const catalogGames = yield axios.get(`/games/wishlist`)
        yield put({type: 'SET_WISHLIST', payload: catalogGames.data});
    } catch (error) {
        console.log('error fetching wishlist games', error)
    }
}
function* wishlistSaga() {
    yield takeLatest('ADD_WISHLIST', fetchWishlist)
}
export default wishlistSaga