import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//this function will delete items from wishlist table in database
//action.payload is carrying data that needs to be deleted
function* deleteWish(action) {
  try {
    console.log("action.payload is", action.payload);
    // Make a DELETE request to remove a game from the wishlist
    yield axios.delete(`/wishlist/${action.payload}`);
    // Dispatch action to get the updated wishlist after deleting a game
    yield put({ type: "GET_WISHLIST" });
  } catch (error) {
    console.log("error deleting wishlist game", error);
  }
}

function* deleteWishSaga() {
  // Watch for the latest DELETE_WISH action and run the deleteWish generator function
  yield takeLatest("DELETE_WISH", deleteWish);
}

export default deleteWishSaga;
