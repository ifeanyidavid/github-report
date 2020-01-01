"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please provide a username");
}
else {
    svc.getUserInfo(process.argv[2], function (user) {
        svc.getRepos(process.argv[2], function (repos) {
            var sortedRepos = _.sortBy(repos, function (repo) { return repo.forkCount * -1; });
            var topFiveRepos = _.take(sortedRepos, 5);
            user.repos = topFiveRepos;
            console.log(user);
        });
    });
}
