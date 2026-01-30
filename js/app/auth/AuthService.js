export class AuthService {
  constructor() {
    this.user = null;
  }

  login(user) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }
}
