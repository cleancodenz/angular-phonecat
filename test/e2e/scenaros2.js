'use strict';

describe('phonecat App', function () {

  describe("Phone list view", function () {
    var query, phoneList,phoneNameColumn;

    beforeEach(function () {
      // to get the page, this will be combined with base url in config
      browser.get('app/index2.html');

      //element(by.xx()) to find an element
      // element.all(by.xxx()) to find many element
      
      // by.binding : through a scope property
      // by.model : through ngmodel
      // by.repeater : the whole ngrepeat  
      phoneList = element.all(by.repeater('phone in phones'));
      phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      
      query = element(by.model('query'));

    });

    it("should render the phone specific links", function () {
      // elemenet.sendKeys - entering data in input
      // element.getText - the text of element 
      
      
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      
      browser.getLocationAbsUrl().then(function(url){
          expect(url).toBe('/phones/nexus-s');
      });

    });

    

  });



});
