// implementation of controllers(a module)  which is defined and will be injected in phonecatApp_3 
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
      /**
        $http.get('phones/phones.json').success(function (data) {
            $scope.phones = data;
        });
   **/
        $scope.phones = Phone.query();
        
        $scope.orderProp = 'age';

    }]);
    
 phonecatControllers.controller('PhoneDetailCtrl',
    ['$scope','$routeParams','Phone',
    function($scope,$routeParams,Phone){
        /**
         * this is example using $http 
        $http.get('phones/'+$routeParams.phoneId+'.json')
        .success(function(data){
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });
        **/
        
        // this is the example of using custome factory Phone which returns a object $resource()
        $scope.phone = Phone.get({phoneId: $routerParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        })
        
       $scope.setImage = function(imageUrl) {
           $scope.mainImageUrl = imageUrl;
       }
        
       $scope.hello = function(name) {
           alert('Hello' + (name || 'world') + '!');
       }
    }
 ]);