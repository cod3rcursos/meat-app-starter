export class User {
  constructor(public email: string, public name: string, private password: string) { }

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password;
  }
}

export const users = {
  "carolina@gmail.com": new User("carolina@gmail.com", "Carol", "carol123"),
  "henrique@gmail.com": new User("henrique@gmail.com", "Henrique", "henrique123"),
}