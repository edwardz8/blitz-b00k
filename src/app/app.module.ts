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
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OddsComponent } from './odds/odds.component';
import { AboutComponent } from './about/about.component';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent }
 // { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
 // { path: 'member', component: MemberComponent,  resolve: { data: UserResolver}},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OddsComponent,
    BetDialogComponent,
    HomePageComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(
      router, { enableTracing: true }
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [BetDialogComponent]
})
export class AppModule { }
