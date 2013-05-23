'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
    value('version', '0.1');

app.factory('Todo', function ($resource) {
    var todo = $resource('https://api.mongolab.com/api/1/databases' +
        '/victortestingmongolab/collections/todos/:id',
        { apiKey: 'qcukEFdSs2P_tqmbzC1u73GF-qqgVyai' }, {
            update: { method: 'PUT' }
        }
    );
    todo.prototype.$remove = function () {
        todo.remove({id: this._id.$oid});
    };

    todo.prototype.$update = function () {
        return todo.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
    };

    todo.prototype.done = false;

    return todo;
});

app.factory('Utils', function () {
    var utils = {
        findWithinArray: function (array, property, value, index) {
            for (var i = (index || 0); i < array.length; i += 1) {
                if (array[i][property] === value) {
                    return i;
                }
            }
            return -1;
        },

        filterOnProp: function (array, property, value) {
            var arr = new Array();
            var i = -1, len = array.length;
            do {
                i = this.findWithinArray(array, property, value, i + 1);
                if (i > -1) {
                    arr.push(array[i]);
                }
            } while (i >= 0 && i < len);

            return arr;
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


