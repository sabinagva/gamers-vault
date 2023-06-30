const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';

function* updateCatalog(action) {
    console.log('action.payload is', action.payload)
    try {
        yield axios.put(`/catalog/${action.payload.id}/${action.payload.description}/${action.payload.user_rating}`)
    }
    catch(error) {
        console.log('error updating', error)
    }
}
function* catalogUpdateSaga() {
    yield takeLatest('UPDATE_CATALOG', updateCatalog)
}
export default catalogUpdateSaga;