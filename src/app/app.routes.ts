import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

export const router: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent }
   // { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
   // { path: 'member', component: MemberComponent,  resolve: { data: UserResolver}},
   // { path: 'non-member', component: NonMemberComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
