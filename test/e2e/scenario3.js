'use strict';

describe('phonecat App', function () {

    describe("should redirect index.html to index.html#/phones", function () {

        beforeEach(function () {
            browser.get('app/index_template.html');
            browser.getLocationrbsUtl().then(function (url) {
                expect(url).toEqual('/phones');
            });
        });


    });


    describe("Phone detail view", function () {

        beforeEach(function () {
            browser.get('app/index_template.html#/phones/nexsus-s');

        });

        it('should display placeholder page with phoneId', function () {
            expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
        });

        
        it('should display first phone image as the main phone image', function () {
            expect(element(by.binding('img.name')).getAttribute('src').toMatch(/img\/phones\/nexus-s.0.jpg/);
        });
        
         it('should swap image when thumbnail is clicked', function () {
            
            element(by.css('.phone-thumbs li:nth-child(3) img')).click();
            expect(element(by.css('img.phone')).getAttribute('src').toMatch(/img\/phones\/nexus-s.2.jpg/);
            
            element(by.css('.phone-thumbs li:nth-child(1) img')).click();
            expect(element(by.css('img.phone')).getAttribute('src').toMatch(/img\/phones\/nexus-s.0.jpg/);
            
        });
    });



});
