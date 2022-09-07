import { ActionReducerMap } from "@ngrx/store";
import { MemberRes } from "../../../../../core/models/members.interface";
import { MembersReducer } from "./members.reducers";


export interface AppState {
    items: ReadonlyArray<MemberRes>;
   
    
  }
  
  export const MEMBERS_REDUCERS: ActionReducerMap<AppState>={
      items: MembersReducer
  }

  interface MembersState{}

  