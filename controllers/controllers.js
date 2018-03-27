var database = require('../models/db');

const rootRoute = function rootRoute(req, res) {
    res.send('Welcome to my website!');
};

const usersRoute = function userRoute(req, res) {
    var users = [];
    for (var i=0; i<database.length; i++){
        users.push(database[i].name);
    }
    res.send(users);
};

const userRoute = function usersRoute(req, res){
    const id = req.params.id;
    res.render("user_template", database[id]);
};

module.exports = {
    rootRoute: rootRoute,
    userRoute: userRoute,
    usersRoute: usersRoute
};