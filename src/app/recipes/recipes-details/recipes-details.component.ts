<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { RecipesComponent } from './../recipes.component';
import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
>>>>>>> work

import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

<<<<<<< HEAD
  constructor(private recipeService: RecipeService) { }
=======
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }
>>>>>>> work

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
