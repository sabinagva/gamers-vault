 import { put, takeLatest } from 'redux-saga/effects';
 import axios from 'axios';

//getting (posting) the games to show up on my search view 
function* fetchGame(action) {
    try {
        console.log('fetching games');
        const gameResponse = yield axios.get(`/games/${action.payload}`)
        console.log('action.payload is', action.payload)
        yield put({type: 'SET_GAMELIST', payload: gameResponse.data})
        console.log('gameResponse.data is', gameResponse.data)
    } catch(error) {
        console.log("error fetching games", error)
    }
}
function* gameSaga () {
    yield takeLatest('GET_GAMES', fetchGame)
}
export default gameSaga

