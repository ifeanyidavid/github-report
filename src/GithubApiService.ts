import * as request from "request";
import { User } from "./User";
import { UserResponse } from "./UserResponse";
import { RepoResponse } from "./RepoResponse";
import { Repo } from "./Repo";

const OPTIONS = {
  headers: {
    "User-agent": "Web"
  },
  json: true
};

export class GithubApiService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    request.get(
      `https://api.github.com/users/${userName}`,
      OPTIONS,
      (error: any, response: any, body: UserResponse) => {
        let user = new User(body);
        cb(user);
      }
    );
  }

  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    request.get(
      `https://api.github.com/users/${userName}/repos`,
      OPTIONS,
      (error: any, response: any, body: RepoResponse[]) => {
        let repoArray = body;
        const reposList = repoArray.map((repo: RepoResponse) => new Repo(repo));
        cb(reposList);
      }
    );
  }
}
