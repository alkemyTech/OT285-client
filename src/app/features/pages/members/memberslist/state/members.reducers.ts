import { createReducer, on } from "@ngrx/store";
import { addItem, retrievedItemList } from "./members.actions";
import { MemberRes } from "../../../../../core/models/members.interface";

//paso 1
export const initialState: ReadonlyArray<MemberRes> = [];

export const MembersReducer = createReducer(
  initialState,
  on(addItem, (oldState, { item })=>{
    return [...oldState, ...[item]]
  }),

  on(retrievedItemList, (oldState, { items})=>{
    return [...oldState, ...items]
  })

);