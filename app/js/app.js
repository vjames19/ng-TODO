'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/active', {templateUrl: 'partials/active.html', controller: 'ActiveCtrl'});
        $routeProvider.when('/completed', {templateUrl: 'partials/completed.html', controller: 'CompletedCtrl'});
        $routeProvider.otherwise({redirectTo: '/active'});
    }]);
