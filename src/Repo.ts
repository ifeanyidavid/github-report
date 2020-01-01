import { RepoResponse } from "./RepoResponse";

export class Repo {
  name: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;

  constructor(reposResponse: RepoResponse) {
    this.name = reposResponse.full_name;
    this.description = reposResponse.description;
    this.url = reposResponse.html_url;
    this.size = reposResponse.size;
    this.forkCount = reposResponse.forks;
  }
}
