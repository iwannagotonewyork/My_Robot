import { CHANGE_SEARCH_FIELD } from './constants';

//action 정의
export const setSearchField = (text) => {
    console.log(text)
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

//ex) setSearchField('Robin') 
// 그리고 객체를 리턴하는 함수일 뿐이다.
// state는 아직 변경하지 않았다. 이 action을 reducer로 보내야지만, 새로운 state를 리턴받는다.