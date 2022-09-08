import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { User } from "src/app/core/models/user";
import * as userApiActions from "./actions/users-api.actions";

interface UserState {
  show: boolean;
  users: User[];
  error: string;
}

const initialState: UserState = {
  show: true,
  users: [],
  error: '',
};

const getUserFeatureState = createFeatureSelector<UserState>("users");

export const getUsers = createSelector(
  getUserFeatureState,
  (state) => state.users
);
export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);

export const usersReducer = createReducer(
  initialState,
  on(userApiActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  }),
  on(userApiActions.loadUsersFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
