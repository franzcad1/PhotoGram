import axios from 'axios';
import { GET_ALL_PHOTOS_PENDING, GET_ALL_PHOTOS_SUCCESS, GET_ALL_PHOTOS_ERROR } from "./homeTypes";

export const getAllPhotos = (page) => async (dispatch, getState) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      dispatch({
        type: GET_ALL_PHOTOS_PENDING,
      });
      const { data } = await axios(
        `${baseURL}/photos?page=${page}&perpage=50&client_id=${accessKey}`
      );
      dispatch({
        type: GET_ALL_PHOTOS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_PHOTOS_ERROR,
      });
    }
  };
  