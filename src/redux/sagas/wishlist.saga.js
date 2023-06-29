const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';
function* fetchWishlist() {
    try {
        console.log('fetching wishlist games');
        const wishlistGames = yield axios.get(`/wishlist`)
        yield put({type: 'SET_WISHLIST', payload: wishlistGames.data});
    } catch (error) {
        console.log('error fetching wishlist games', error)
    }
}
function* wishlistSaga() {
    yield takeLatest('GET_WISHLIST', fetchWishlist)
}
export default wishlistSaga