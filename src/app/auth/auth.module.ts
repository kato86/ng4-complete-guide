import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SinginComponent,
        SingupComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})

export class AuthModule {}
