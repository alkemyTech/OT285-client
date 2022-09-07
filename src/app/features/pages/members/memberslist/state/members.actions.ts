import { createAction, props } from "@ngrx/store";
import { MemberRes } from "../../../../../core/models/members.interface";

export const addItem = createAction(
    '[Members List] Add Members'
  );
   
  export const retrievedItemList = createAction(
    '[Members List/API] Retrieve Members Succes',
    props<{ items : MemberRes[]}>()
  );