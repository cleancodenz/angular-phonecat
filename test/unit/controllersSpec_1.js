describe("PhoneListCtrl_1", function(){
    var scope, ctrl;
    
    beforeEach(module('phonecatApp_1'));
    
    beforeEach(inject(function($controller) {
        scope= {};
        ctrl =$controller('PhoneListCtrl_1',{$scope:scope});
    }));
    
    it('should create "phones" model with 3 phones', inject(function ($controller){
       
        expect(scope.phones.length).toBe(3);
        expect(scope.name).toBe('world');
    }));
    
    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    })
    
});