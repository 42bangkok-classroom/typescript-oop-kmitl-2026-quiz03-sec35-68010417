export class User {
  username: string;
  private password: string;
  private LOGIN_ATTEMPTS: number = 0;

  constructor(name: string, password: string) {
    this.username = name;
    this.password = password;
  }
  login(password: string): boolean {
    this.LOGIN_ATTEMPTS = this.LOGIN_ATTEMPTS + 1;
    return this.validatePassword(password);
  }
  private validatePassword(password: string): boolean {
    return this.password === password;
  }
  getLoginAttempts(): number {
    return User.LOGIN_ATTEMPTS;
  }
}
