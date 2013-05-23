'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1');

app.factory('Todos', function (Utils, Models) {
    var todos = {active: [], completed: []};
    todos.removeTodo = function (text, arr) {
        var index = Utils.findWithinArray(arr, 'text', text);
        arr.splice(index, 1);
    }

    todos.findTodo = function (text, arr) {
        return Utils.findWithinArray(arr, 'text', text);
    }

    todos.addTodo = function (text, arr) {
        arr.push(new Models.Todo(text, false))
    }

    return todos;
});

app.factory('Utils', function () {
    var utils = {
        findWithinArray: function (array, property, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][property] === value) {
                    return i;
                }
            }
            return -1;
        }
    };

    return utils;
});

app.factory('Models', function () {

    var models = {
        Todo: function (text, done) {
            this.text = text;
            this.done = done;
        }
    }

    return models;
});


