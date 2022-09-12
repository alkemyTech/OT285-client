import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as categoriesApiActions from "./actions/categories-api.actions";
import * as categoriesPageActions from "./actions/categories-page.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { CategoriesService } from "src/app/features/services/categories.service";
@Injectable()
export class CategoriesEffects {
  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoriesPageActions.loadCategories),
      mergeMap(() =>
        this.categoriesService
          .getAllCategories()
          .pipe(
            map((res) => categoriesApiActions.loadCategoriesSuccess({ categories: res.data })),
            catchError((err)=> of(categoriesApiActions.loadCategoriesFailure({error: err.message})))
          )
      )
    );
  });
}
