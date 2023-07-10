const { takeLatest, put } = require("redux-saga/effects");
import axios from 'axios';

function* postCatalog(action) {
  try {
    console.log('catalog action.payload is ', action.payload)
    // Make a POST request to add a game to the catalog
    yield axios.post('/catalog', action.payload)
    // Dispatch action to get the updated catalog after adding a game
    yield put({ type: 'GET_CATALOG' })
  } catch (error) {
    console.log('error posting to catalog', error)
  }
}

function* postCatalogSaga() {
  // Watch for the latest ADD_CATALOG action and run the postCatalog generator function
  yield takeLatest('ADD_CATALOG', postCatalog)
}

export default postCatalogSaga;
