import {
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    GET_USER_PHOTOS_PENDING,
    GET_USER_PHOTOS_SUCCESS,
    GET_USER_PHOTOS_ERROR,
} from "./userTypes";

const initialState = {
  isLoading: false,
  hasError: false,
  user: null,
  pictures: [],
  hasMore: true,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        pictures: [...state.pictures, ...action.payload.photos],
      };
    case GET_USER_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
      case GET_USER_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pictures: [...state.pictures, ...action.payload],
      };
    case GET_USER_PHOTOS_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default userReducer;
