import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './../auth/auth-guard.service';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
        { path: ':id', component: RecipesDetailsComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
      ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
