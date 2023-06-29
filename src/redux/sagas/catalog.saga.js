const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';
function* fetchCatalog() {
    try {
        console.log('fetching catalog games')
        const catalogGames = yield axios.get(`/catalog`)
        yield put({type: 'SET_CATALOG', payload: catalogGames.data})
    } catch (error) {
        console.log('error getting getting catalog games from reducer', error)
    }
    
}
function* catalogSaga() {
    yield takeLatest('GET_CATALOG', fetchCatalog)
}
export default catalogSaga