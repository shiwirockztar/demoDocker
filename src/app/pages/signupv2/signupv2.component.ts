import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupv2',
  templateUrl: './signupv2.component.html',
  styleUrls: ['./signupv2.component.css'],
})
export class Signupv2Component {
  loginData = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private snack: MatSnackBar) {}

  formSubmit() {
    if (
      this.loginData.username.trim() == null ||
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
      });
      // return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
      });
      // return;
    }
    console.log(this.loginData);
  }

  linkV1() {
    this.router.navigate(['login']);
  }

  linkLobby() {
    this.router.navigate(['lobby']);
  }
  reset() {
    this.loginData.username = '';
  }
}
