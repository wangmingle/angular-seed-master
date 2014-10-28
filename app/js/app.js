'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: MyCtrl2});
    $routeProvider.when('/phones', {templateUrl: 'partials/phone-list.html', controller: PhoneListCtrl2})
    $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).otherwise({redirectTo: '/phones'});
  }]);
