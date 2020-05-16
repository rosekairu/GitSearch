export class Repo {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public stars: number,
    public forks: number,
    public languages: number,
    public created_at: Date
  ) {}
}
