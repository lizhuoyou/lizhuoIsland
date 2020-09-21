import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory, History } from "history";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from "connected-react-router";
import thunk, { ThunkDispatch } from "redux-thunk";
import promiseMiddleware from "redux-promise";

export const history = createBrowserHistory();

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
  });

export const store = createStore(
  rootReducer(history),
  applyMiddleware(thunk, promiseMiddleware, routerMiddleware(history))
);

interface RootAction {
  type: string;
}

export type AppState = Exclude<
  Parameters<ReturnType<typeof rootReducer>>[0],
  undefined
>;

export type PWThunkDispatch = ThunkDispatch<AppState, undefined, RootAction>;
