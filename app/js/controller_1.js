var phonecatApp_1 = angular.module('phonecatApp_1',[]);
phonecatApp_1.controller('PhoneListCtrl_1', function($scope){
    $scope.phones= [
        {'name':'Nexus S1','snippet':'Fast just got faster with Nexus S.','age':1},
        {'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.','age':2},
        {'name': 'MOTOROLA XOOM™', 'snippet': 'The Next, Next Generation tablet.','age':3}
    ];
    
    $scope.name ="world";
    $scope.orderProp= 'age';
});