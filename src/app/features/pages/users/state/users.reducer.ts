import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { User } from "src/app/core/models/user";
import * as userActions from "./users.actions";

interface UserState {
  show: boolean;
  users: User[]
}

const initialState: UserState = {
  show: true,
  users: []
};

const getUserFeatureState = createFeatureSelector<UserState>("users");

export const getUsersState = createSelector(
  getUserFeatureState,
  (state) => state.users
);

export const usersReducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  })
);
