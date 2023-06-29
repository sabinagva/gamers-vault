const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';

function* postWishlist(action) {
    try {
        console.log('action.payload is', action.payload);
        yield axios.post('/wishlist', action.payload)
        yield put({type: 'GET_WISHLIST'})
        console.log(action.payload);
    } catch(error){
        console.log('error posting to wishlist', error);
    }
}
function* postWishlistSaga() {
    yield takeLatest('ADD_WISHLIST', postWishlist)
}
export default postWishlistSaga;