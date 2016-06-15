var phonecatApp_2 = angular.module('phonecatApp_2',[]);
phonecatApp_2.controller('PhoneListCtrl_2',['$scope','$http',
 function($scope, $http){
    $http.get('phones/phones.json').success(function(data){
        //only displaying first 5 phones
        $scope.phones = data.splice(0,5);
    });
    
    $scope.name ="world";
    $scope.orderProp= 'age';
}]);