'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('phone', ['$resource',
    function ($resource) {
       // factory returns a function
        return $resource('phones/:phoneId.json',{},{
            query: {
                method:'GET',
                params: {phoneId:'phones'},
                isArray : true
            }
        })
    }]);

