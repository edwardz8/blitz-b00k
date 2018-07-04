import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule, Routes, } from '@angular/router';

export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent }
 // { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
 // { path: 'member', component: MemberComponent,  resolve: { data: UserResolver}},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(
      router, { enableTracing: true }
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
