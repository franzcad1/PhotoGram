import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import searchReducer from "./search/searchReducer";

const reducers = combineReducers({
    search: searchReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize... (Keeping comment in as a reminder)
      })
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
