import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";
import thunk from "redux-thunk";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      users: UsersReducer,
    }),
    applyMiddleware(thunk)
  );
}
