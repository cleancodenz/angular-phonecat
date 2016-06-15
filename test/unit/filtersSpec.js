'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

    // this loads the module into the injector for this test run
    beforeEach(module('phonecatFilters'));
    
    descibe('checkmark', function(){
        // inject is from angular.mock.inject()
        // suffix 'Filter' is appended to your filter name
        it('', inject(function(checkmarkFilter){
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');
            
        }))
    });
});
