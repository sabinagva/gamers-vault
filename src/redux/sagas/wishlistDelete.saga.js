import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this function will delete items from wishlist table in database
//action.payload is carrying data that needs to be deleted 
//
function* deleteWish(action) {
    try {
        console.log('action.payload is', action.payload)
        yield axios.delete(`/wishlist/${action.payload}`)
        yield put ({type: 'GET_WISHLIST'})
    }
    catch(error) {
        console.log('error deleting wishlist game', error)
    }
    
}
function* deleteWishSaga () {
    yield takeLatest( 'DELETE_WISH', deleteWish)
}
export default deleteWishSaga