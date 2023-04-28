import axios from 'axios';
import { GET_PHOTO_ERROR, GET_PHOTO_SUCCESS, GET_PHOTO_PENDING } from "./photoTypes";


export const getPhoto = (photoID) => async (dispatch, getState) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      dispatch({
        type: GET_PHOTO_PENDING,
      });
      const { data } = await axios(
        `${baseURL}/photos/${photoID}?client_id=${accessKey}`
      );
      dispatch({
        type: GET_PHOTO_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_PHOTO_ERROR,
      });
      console.log(err);
    }
  };
  