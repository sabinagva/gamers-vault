const catalogReducer = (state = [], action) => {
    switch(action.type) {
      case 'SET_CATALOG':
        return action.payload;
     default:
        return state;
    }
  }
export default catalogReducer;