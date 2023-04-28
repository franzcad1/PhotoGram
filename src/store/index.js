import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import searchReducer from "./search/searchReducer";
import photoReducer from "./photo/photoReducer";

const reducers = combineReducers({
    search: searchReducer,
    photo: photoReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

      })
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
