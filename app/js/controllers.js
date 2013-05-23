'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']);

app.controller('ActiveCtrl', function ($scope, Todos, Models) {
    $scope.todos = Todos.active;

    $scope.remaining = function () {
        return $scope.todos.filter(function (todo) {
            return !todo.done;
        }).length;
    };

    $scope.getTotalActive = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        Todos.addTodo($scope.inputTodoText, $scope.todos);
        $scope.inputTodoText = '';

    };
});

app.controller('CompletedCtrl', function ($scope, Todos) {
    $scope.todos = Todos.completed;

});

