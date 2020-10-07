import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (
  state = initialState.users,
  action: { type: string; payload?: {} }
) => {
  switch (action.type) {
    case Actions.SIGN_IN_WITH_EMAIL:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
