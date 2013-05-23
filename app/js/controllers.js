'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']);

app.controller('ActiveCtrl', function ($scope, $rootScope, Todo, Utils) {
    $scope.todos = Todo.query({q: JSON.stringify({status: 'active'})});

    $scope.remaining = function () {
        return Utils.filterOnProp($scope.todos, 'done', false).length;
    };

    $scope.getTotalActive = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        var todo = new Todo({text: $scope.inputTodoText, status: 'active'});
        $scope.todos.push(todo);
        $scope.inputTodoText = '';
        todo.$save();
    };

    $scope.removeCompleted = function () {
        $scope.todos = $scope.todos.filter(function (todo) {
            if (todo.done) {
                todo.status = 'completed';
                todo.$update();
                return false;
            }

            return true;
        })
    };
});

app.controller('CompletedCtrl', function ($scope, Todo) {
    $scope.todos = Todo.query({q: JSON.stringify({status: 'completed'})});
    $scope.getTotalTodosCompleted = function () {
        return $scope.todos.length;
    };
});

