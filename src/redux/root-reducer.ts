import { combineReducers } from 'redux';
import Types from './actionTypes';
const INITIAL_STATE = {
  albumList: [],
};
function albumReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.GET_ALBUM:
      return { ...state, albumList: action.payload.albumList };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  albumReducer,
});
export default rootReducer;
