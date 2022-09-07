import { createReducer, on } from "@ngrx/store";
import { callApi, retrievedItemList } from "./members.actions";
import { MemberRes } from "../../../../../core/models/members.interface";

//paso 1
export const initialState: ReadonlyArray<MemberRes> = [];

export const MembersReducer = createReducer(
  initialState,
  on(retrievedItemList, (state, { items})=>{
    return [...state, ...items]
  })

);