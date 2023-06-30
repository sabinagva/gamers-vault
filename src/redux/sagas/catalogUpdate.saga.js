const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';

function* updateCatalog(action) {
    try {
        yield axios.put(`/catalog/`)
    }
    catch(error) {
        console.log('error updating', error)
    }
}
function* catalogUpdateSaga() {
    yield takeLatest('UPDATE_CATALOG', updateCatalog)
}
export default catalogUpdateSaga