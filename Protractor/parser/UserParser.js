'use strict';
const fs = require('fs');
const User = require('../model/User')

class UserParser {

    parseDataFromJson() {
        fs.readFile('../data/user.json', function (err, data) {
            if (err) throw err;
            let jsonParsed = JSON.parse(data);
            email = jsonParsed.user.email;
            domain = jsonParsed.user.domain;
            password = jsonParsed.user.password;
            return new User(email, domain, password);
        });
    }
}

module.exports = UserParser;