import {GET_SEARCHED_PHOTOS_PENDING, GET_SEARCHED_PHOTOS_SUCCESS, GET_SEARCHED_PHOTOS_ERROR} from './searchTypes'

const initialState = {
  isLoading: false,
  hasError: false,
  pictures: [],
  hasMore: true,
};

function searchReducer(state = initialState, action){
    switch(action.type){
        case GET_SEARCHED_PHOTOS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case GET_SEARCHED_PHOTOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                pictures: [...state.pictures, ...action.payload.results],
            }
        case GET_SEARCHED_PHOTOS_ERROR:
            return{
                ...state,
                hasError: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export default searchReducer;