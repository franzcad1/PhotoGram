import axios from "axios";
import {
  GET_SEARCHED_PHOTOS_PENDING,
  GET_SEARCHED_PHOTOS_SUCCESS,
  GET_SEARCHED_PHOTOS_ERROR,
} from "./searchTypes";

export const searchPhotos = (searchValue, page) => async (dispatch, getState) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  try {
    dispatch({
      type: GET_SEARCHED_PHOTOS_PENDING,
    });
    const { data } = await axios(
      `${baseURL}/search/photos/?query=${searchValue}&page=${page}&perpage=30&client_id=${accessKey}`
    );
    dispatch({
      type: GET_SEARCHED_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SEARCHED_PHOTOS_ERROR,
    });
  }
};


