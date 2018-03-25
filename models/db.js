var faker = require('faker');
var database = [];
var i;
for (i=0; i<100; i++){
    var person= {};
    var randomID = faker.random.uuid();
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomDOB = faker.date.past();
    person.ID = randomID;
    person.name = randomName;
    person.email = randomEmail;
    person.DOB = randomDOB;

    database.push(person);

}

module.exports = database;