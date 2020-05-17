export class User {
  static result: any;
  constructor(
    public name: string,
    public login: string,
    public avatar_url: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public created_at: Date
  ) {}
}
