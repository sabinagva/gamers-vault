const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';

function* fetchWishlist() {
  try {
    console.log('fetching wishlist games');
    // Make a GET request to retrieve the wishlist games
    const wishlistGames = yield axios.get(`/wishlist`);
    // Dispatch action to set the retrieved wishlist games in the store
    yield put({ type: 'SET_WISHLIST', payload: wishlistGames.data });
  } catch (error) {
    console.log('error fetching wishlist games', error);
  }
}

function* wishlistSaga() {
  // Watch for the latest GET_WISHLIST action and run the fetchWishlist generator function
  yield takeLatest('GET_WISHLIST', fetchWishlist);
}

export default wishlistSaga;
