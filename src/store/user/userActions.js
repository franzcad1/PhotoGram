import axios from "axios";
import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_PHOTOS_PENDING,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_ERROR,
} from "./userTypes";

export const getUser = (username) => async (dispatch, getState) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  try {
    dispatch({
      type: GET_USER_PENDING,
    });
    const { data } = await axios(
      `${baseURL}/users/${username}/?client_id=${accessKey}`
    );
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR,
    });
  }
};

export const getUserPhotos = (username, page) => async (dispatch, getState) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  try {
    dispatch({
      type: GET_USER_PHOTOS_PENDING,
    });
    const { data } = await axios(
        `${baseURL}/users/${username}/photos?page=${page}&per_page=12&client_id=${accessKey}`
      );
    dispatch({
      type: GET_USER_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_PHOTOS_ERROR,
    });
  }
};
