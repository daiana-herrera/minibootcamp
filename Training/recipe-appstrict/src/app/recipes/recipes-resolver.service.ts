import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Recipe } from "./recipe.model";
import { DataStorangeService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";
@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService: DataStorangeService, private recipeService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }

    }
}