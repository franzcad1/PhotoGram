import { GET_ALL_PHOTOS_PENDING, GET_ALL_PHOTOS_SUCCESS, GET_ALL_PHOTOS_ERROR } from "./homeTypes";
const initialState = {
    hasError: false,
    isLoading: false,
    hasMore: true,
    pictures: [],
}
function homeReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_PHOTOS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_PHOTOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                pictures: [...state.pictures, ...action.payload],
            }
        case GET_ALL_PHOTOS_ERROR:
            return{
                ...state,
                hasError: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export default homeReducer;