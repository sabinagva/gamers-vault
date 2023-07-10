import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Saga function to fetch games based on the search term
function* fetchGame(action) {
  try {
    console.log("fetching games");
    // Make a GET request to retrieve games based on the search term
    const gameResponse = yield axios.get(`/games/${action.payload}`);
    console.log("action.payload is", action.payload);
    // Dispatch action to set the retrieved game list in the store
    yield put({ type: "SET_GAMELIST", payload: gameResponse.data });
    console.log("gameResponse.data is", gameResponse.data);
  } catch (error) {
    console.log("error fetching games", error);
  }
}

function* gameSaga() {
  // Watch for the latest GET_GAMES action and run the fetchGame generator function
  yield takeLatest("GET_GAMES", fetchGame);
}

export default gameSaga;
