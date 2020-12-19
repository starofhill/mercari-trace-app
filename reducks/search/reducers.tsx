/* eslint-disable import/prefer-default-export */
import * as Actions from "./actions";
import initialState from "../store/initialState";

export const SearchReducer = (
  state = initialState.search,
  action: { type: unknown; payload: unknown }
) => {
  switch (action.type) {
    case Actions.ADD_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
        searchWordArray: [...state.searchWordArray, action.payload],
      };
    case Actions.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case Actions.RESET_SEARCH_WORD:
      return {
        ...state,
        searchWord: "",
        searchWordArray: [],
      };
    case Actions.RESET_CATEGORY:
      return {
        ...state,
        category: "",
      };
    case Actions.DELETE_SEARCH_WORD:
      return {
        ...state,
        searchWord: state.searchWordArray[state.searchWordArray.length - 2],
        searchWordArray: state.searchWordArray.splice(
          0,
          state.searchWordArray.length - 1
        ),
      };
    default:
      return state;
  }
};
