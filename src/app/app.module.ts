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
// import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes, } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OddsComponent } from './odds/odds.component';
import { AboutComponent } from './about/about.component';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './auth/users/user-login/user-login.component';
import { UserProfileComponent } from './auth/users/user-profile/user-profile.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SportNavComponent } from './sport-nav/sport-nav.component';


export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: AppComponent },
  { path: '', component: OddsComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OddsComponent,
    BetDialogComponent,
    CarouselComponent,
    AboutComponent,
    UserLoginComponent,
    UserProfileComponent,
    SportNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      router, { enableTracing: true }
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [BetDialogComponent]
})
export class AppModule { }
