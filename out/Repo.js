"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(reposResponse) {
        this.name = reposResponse.full_name;
        this.description = reposResponse.description;
        this.url = reposResponse.html_url;
        this.size = reposResponse.size;
        this.forkCount = reposResponse.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
