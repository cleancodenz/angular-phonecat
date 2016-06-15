'use strict';

describe('phonecat App', function () {

// my change
  describe("Phone list view", function () {
    var query, phoneList,phoneNameColumn;

    beforeEach(function () {
      browser.get('app/index.html');

      phoneList = element.all(by.repeater('phone in phones'));
      phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      
      query = element(by.model('query'));

    });

    it("should filter the phone list as a user types into the search box", function () {

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');

      expect(phoneList.count()).toBe(1);

      query.clear();

      query.sendKeys('motorola');

      expect(phoneList.count()).toBe(2);

    });

    it('should display the current filter value in the title bar', function () {
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
    });

    it('should be possible to control phone order vis the dropdown select box', function () {
     
      function getNames() {
        return phoneNameColumn.map(function (elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let us narrow the dataset to make the test assertions shorter

      var names = getNames();
      
      browser.pause();
      
      expect(names).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      names = getNames();
      
      expect(names).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });

  });



});