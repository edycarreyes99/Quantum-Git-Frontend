import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
    declarations: [
        UsersViewComponent,
        UserInfoComponent
    ],
    exports: [
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
