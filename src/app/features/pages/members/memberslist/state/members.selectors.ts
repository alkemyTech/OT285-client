import { createFeatureSelector } from "@ngrx/store";
import { MemberRes } from "../../../../../core/models/members.interface";

export const selectMembers = createFeatureSelector<MemberRes[]>('items');