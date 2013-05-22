'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1');

app.factory('Todos',function(){
    var shared = {active:[], completed:[]};
    shared.removeTodo = function(text,arr){
        var index = findWithinArray(arr,'text',text);
        arr.splice(index,1);
    }

    shared.findTodo = function(text,arr){
        return findWithinArray(arr,'text',text);
    }

    shared.addTodo = function(text,arr){
        arr.push(new Todo(text,false))
    }

    return shared;
});


