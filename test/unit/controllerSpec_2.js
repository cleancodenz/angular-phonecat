describe("PhoneListCtrl_2", function(){
    var scope, ctrl, $httpBackend;
    
    // Load the controller's module into a mock module
    beforeEach(module('phonecatApp_2'));
   //Initialize the controller and a mock scope
   
   // Inject will register ngMock services(components) to be be used in this test module 
   // :$controller, $rootScope, $httpBackend
    
    
  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
    // You can also inject your own service here with service name 
    
    beforeEach(inject(function(_$httpBackend_, _$rootScope_,$controller) {
        $httpBackend = _$httpBackend_;
        
        // this is using angular-mocks.js
        //Use the $httpBackend.expectGET method to train the $httpBackend service to expect an incoming HTTP request 
        //and tell it what to respond with. 
        //Note that the responses are not returned until we call the $httpBackend.flush method.
        
        $httpBackend.expectGET('phones/phones.json')
        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        
        //Create a mock scope
        scope= _$rootScope_.$new();
        //This is done by ngMock, the first parameter is controller constructor 
        // Second parameter is called locals , injection locals 
        ctrl =$controller('PhoneListCtrl_2',{$scope:scope});
    }));
    
    it('should create "phones" model with 2 phones', function (){
       
       expect(scope.phones).toBeUndefined();
       // Flush means any requests pending at the mock httpBackend,result will be returned now
       $httpBackend.flush();
       
       
       expect(scope.phones).toEqual([{name: 'Nexus S'},
                               {name: 'Motorola DROID'}]);
       
       expect(scope.name).toBe('world');
    });
    
    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    })
    
});