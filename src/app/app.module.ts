import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lobby3Component } from './pages/lobby3/lobby3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngModel
import { FormsModule } from '@angular/forms';

// Angular materials
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableFilterComponent } from './components/table/table-filter/table-filter.component';
import { TableFilterAndSortComponent } from './components/table/table-filter-and-sort/table-filter-and-sort.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Signupv2Component } from './pages/signupv2/signupv2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lobby3Component,
    TableFilterComponent,
    TableFilterAndSortComponent,
    ChatComponent,
    SignupComponent,
    Signupv2Component,
  ],
  imports: [
    MatSnackBarModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
