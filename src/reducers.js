import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
}

//reducer : searchRobot(action에 대한 store(state 객체)를 리턴한다)
export const searchRobot = (state=initialState, action={}) => {
    console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;                
    }
}