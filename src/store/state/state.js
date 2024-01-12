import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import indianMeal from "../reducers/indianMeal";
import mealsInCart from "../reducers/mealsInCart";

const mainStore = combineReducers({
    indianMeal:indianMeal,
    mealsInCart:mealsInCart,
});
const store = createStore(mainStore, applyMiddleware(thunk));
export default store;
