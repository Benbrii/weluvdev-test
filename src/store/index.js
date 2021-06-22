import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers";
import localForage from "localforage";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [promise, thunk, routerMiddleware()];

const persistConfig = {
    key: "root",
    storage: localForage,
    blacklist: []
};

export const store = createStore(
    persistReducer(persistConfig, reducers),
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
