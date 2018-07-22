import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes, } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BoardsComponent } from './boards/boards.component';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { UserProfileComponent } from './auth/users/user-profile/user-profile.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SportNavComponent } from './sport-nav/sport-nav.component';
import { PasswordlessAuthComponent } from './auth/passwordless-auth/passwordless-auth.component';
import { UserListComponent } from './auth/users/user-list/user-list.component';

export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'boards', component: BoardsComponent },
  { path: 'login', component: PasswordlessAuthComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BetDialogComponent,
    CarouselComponent,
    BoardsComponent,
    SportNavComponent,
    PasswordlessAuthComponent,
    UserListComponent
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      router, { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BetDialogComponent]
})
export class AppModule { }
