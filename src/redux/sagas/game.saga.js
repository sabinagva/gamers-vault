// import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

//getting (posting) the games to show up on my search view 
function* fetchGame(action) {
    try {
        console.log('fetching games');
        const gameResponse = yield axios.get(`games/:id${action.payload}`)
        yield put({type: 'SET_GAMES', payload: gameResponse.data})
        console.log('gameResponse.data is', gameResponse.data)
    } catch(error) {
        console.log("error fetching games", error)
    }
}
export default fetchGame