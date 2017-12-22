import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        // const token = this.authService.getToken();
    //    return this.httpClient
    //        .put('https://ng-recipe-book-ea90d.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //            observe: 'events',
    //            params: new HttpParams().set('auth', token)
    //        });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-ea90d.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true});
                return this.httpClient.request(req);
    }

    getRecipes() {
        const token = this.authService.getToken();
        // return this.httpClient
        //     .get<Recipe[]>('https://ng-recipe-book-ea90d.firebaseio.com/recipes.json?auth=' + token)
        return this.httpClient
            .get<Recipe[]>('https://ng-recipe-book-ea90d.firebaseio.com/recipes.json?auth=' + token, {
                observe: 'body',
                responseType: 'json'
            })
            .map(
                (recipes) => {
                    console.log(recipes);
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
