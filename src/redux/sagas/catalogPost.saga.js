const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';
function* postCatalog(action) {
    try {
        console.log('catalog action.payload is ', action.payload)
        yield axios.post ('/catalog', action.payload)
        yield put({type: 'GET_CATALOG'})
    }catch(error) {
        console.log('error posting to catalog', error)
    }
}
function* postCatalogSaga() {
    yield takeLatest ('ADD_CATALOG', postCatalog)
}
export default postCatalogSaga;