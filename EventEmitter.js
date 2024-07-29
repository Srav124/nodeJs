const events = require('events');
const utils = require('util');

function Person (name) {
    this.name = name
}

utils.inherits(Person, events.EventEmitter);

var james = new Person("james")
var jack = new Person("jack")
var jasmine = new Person("jasmine")

var personList = [james, jack, jasmine]

personList.forEach(function(person) {
    person.on('speak', function(mssg) {
        console.log(person.name + ': said ' + mssg)
    })
})

jack.emit('speak', 'hello master')