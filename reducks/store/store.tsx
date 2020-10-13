import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";
import { SearchReducer } from "../search/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      users: UsersReducer,
      search: SearchReducer,
    }),
    applyMiddleware(thunk)
  );
}
