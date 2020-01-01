import { Repo } from "./Repo";
import { UserResponse } from "./UserResponse";

export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
  repos: Repo[];

  constructor(userResponse: UserResponse) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
  }
}
