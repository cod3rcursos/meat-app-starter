import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // Quandoe stiver usando o ReactiveForms, importar ReactiveFormsModule aqui

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { NotificationService } from "./messages/notification.service";
import { LoginService } from '../security/login/login.service';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    SnackbarComponent,
  ],
  providers: [
    NotificationService,
    LoginService,
  ]
})

export class SharedModule { }