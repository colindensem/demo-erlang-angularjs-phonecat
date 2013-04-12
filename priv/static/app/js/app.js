'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', {templateUrl: '/static/app/partials/phone-list.html',   controller: PhoneListCtrl}).
        when('/phones/:phoneId', {templateUrl: '/static/app/partials/phone-detail.html', controller: PhoneDetailCtrl}).
        otherwise({redirectTo: '/'});
}]);
