import { createFeatureSelector } from "@ngrx/store";
import { MemberRes } from "./members.interface";

export const selectMembers = createFeatureSelector<ReadonlyArray<MemberRes>>('items');