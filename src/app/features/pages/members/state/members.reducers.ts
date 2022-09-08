import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Member } from "src/app/core/models/member";
import * as membersApiActions from "./actions/members-api.actions";

interface MemberState {
  show: boolean;
  members: Member[];
  error: string;
}

export const initialState: MemberState = {
  show: true,
  members: [],
  error: "",
};

export const getMemberFeatureState = createFeatureSelector<MemberState>("members");

export const getMembers = createSelector(
  getMemberFeatureState,
  (state) => state.members
);
export const getError = createSelector(
  getMemberFeatureState,
  (state) => state.error
);

export const MembersReducer = createReducer(
  initialState,
  on(membersApiActions.loadMembersSuccess, (state, action) => {
    return {
      ...state,
      members: action.members,
    };
  }),
  on(membersApiActions.loadMembersFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
