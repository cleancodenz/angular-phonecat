'use strict';

/* App Module */

var phonecatApp_3 = angular.module(
    "phonecatApp_3",
    // this list the modules that the application depends on 
    // 'ngRoute' normally works with ng-view
    ['ngRoute', 'phonecatControllers','phonecatFilters', 'phonecatServices']
);

// app config 
// all the providers configuraion has to be done in config at app level 
phonecatApp_3.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/phones',{
        templateUrl:'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    })
    .when('/phones/:phoneId',{
        templateUrl:'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    })
    .otherwise({
        redirectTo:'/phones'
    });
    
}]); 
