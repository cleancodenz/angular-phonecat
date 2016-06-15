describe("Controllers_3", function(){
    var scope, ctrl, $httpBackend;
    
    beforeEach(module('phonecatControllers'));
    
  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
  
    beforeEach(inject(function(_$httpBackend_, _$rootScope_,$controller) {
        $httpBackend = _$httpBackend_;
        
        // this is using angular-mocks.js
        //Use the $httpBackend.expectGET method to train the $httpBackend service to expect an incoming HTTP request 
        //and tell it what to respond with. 
        //Note that the responses are not returned until we call the $httpBackend.flush method.
        
        $httpBackend.expectGET('phones/phones.json')
        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
       
        
        scope= _$rootScope_.$new();
        
        ctrl =$controller('PhoneListCtrl',{$scope:scope});
        
    }));
    
    it('should create "phones" model with 2 phones', function (){
       
       expect(scope.phones).toBeUndefined();
       $httpBackend.flush();
       
       expect(scope.phones).toEqual([{name: 'Nexus S'},
                               {name: 'Motorola DROID'}]);
       
     
    });
    
    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    })
    
});