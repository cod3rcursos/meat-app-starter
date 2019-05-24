"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "carolina@gmail.com": new User("carolina@gmail.com", "Carol", "carol123"),
    "henrique@gmail.com": new User("henrique@gmail.com", "Henrique", "henrique123")
};
