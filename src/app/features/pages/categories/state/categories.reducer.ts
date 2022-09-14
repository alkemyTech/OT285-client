import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { Category } from "src/app/core/models/category";
import * as categoriesApiActions from "./actions/categories-api.actions";
  
interface CategoryState {
  show: boolean;
  categories: Category[];
  error: string;
}

const initialState: CategoryState = {
  show: true,
  categories: [],
  error: '',
};

const getCategoriesFeatureState = createFeatureSelector<CategoryState>("categories");

export const getCategories = createSelector(
  getCategoriesFeatureState,
  (state) => state.categories
);
export const getError = createSelector(
  getCategoriesFeatureState,
  (state) => state.error
);

export const categoriesReducer = createReducer(
  initialState,
  on(categoriesApiActions.loadCategoriesSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
    };
  }),
  on(categoriesApiActions.loadCategoriesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
  