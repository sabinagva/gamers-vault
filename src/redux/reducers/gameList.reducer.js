const gameListReducer =(state = [], action) => {
    switch(action.type) {
        case 'SET_GAMELIST':
         return action.payload;
         default:
            return state;
    }
}
export default gameListReducer