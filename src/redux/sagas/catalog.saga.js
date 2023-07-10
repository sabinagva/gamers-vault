const { takeLatest, put } = require("redux-saga/effects");
import axios from "axios";

// Saga function to fetch catalog games
function* fetchCatalog() {
  try {
    console.log("fetching catalog games");
    // Make API request to get catalog games
    const catalogGames = yield axios.get(`/catalog`);
    // Dispatch action to set catalog games in the reducer
    yield put({ type: "SET_CATALOG", payload: catalogGames.data });
  } catch (error) {
    console.log("error getting catalog games from the reducer", error);
  }
}

// Catalog Saga
function* catalogSaga() {
  // Listen for the latest "GET_CATALOG" action and run fetchCatalog saga
  yield takeLatest("GET_CATALOG", fetchCatalog);
}

export default catalogSaga;
