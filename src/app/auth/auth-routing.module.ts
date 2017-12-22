import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const authRoutes: Routes = [
  { path: 'singup', component: SingupComponent },
  { path: 'singin', component: SinginComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        FormsModule,

    ]
})

export class AuthRoutingModule {}
