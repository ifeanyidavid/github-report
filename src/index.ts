import * as _ from "lodash";
import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";

const svc = new GithubApiService();

if (process.argv.length < 3) {
  console.log("Please provide a username as an argument...");
} else {
  svc.getUserInfo(process.argv[2], (user: User) => {
    svc.getRepos(process.argv[2], (repos: Repo[]) => {
      const sortedRepos = _.sortBy(repos, (repo: Repo) => repo.forkCount * -1);
      const topFiveRepos = _.take(sortedRepos, 5);
      user.repos = topFiveRepos;
      console.log(user);
    });
  });
}
