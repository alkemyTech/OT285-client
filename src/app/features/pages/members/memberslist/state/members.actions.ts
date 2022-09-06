import { createAction, props } from "@ngrx/store";
import { MemberRes } from "./members.interface";

export const addItem = createAction(
    '[Members List] Add Members',
    props<{ item : MemberRes}>()
  );
   
  export const retrievedItemList = createAction(
    '[Members List/API] Retrieve Members Succes',
    props<{ items : ReadonlyArray<MemberRes>}>()
  );