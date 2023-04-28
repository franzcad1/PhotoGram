import {
  GET_PHOTO_ERROR,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_PENDING,
} from "./photoTypes";

const initialState = {
  isLoading: false,
  hasError: false,
  photo: null,
  isSaved: false,
};

function photoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photo: action.payload,
      };
    case GET_PHOTO_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default photoReducer;
