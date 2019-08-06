export class LoginModel {
  username = '';
  password = '';
  rememberMe = false;
  constructor() {
    this.rememberMe = true;
  }
}
