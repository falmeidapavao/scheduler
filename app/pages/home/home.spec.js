'use strict';

describe('app.view1 module', function() {

  beforeEach(module('app.view1'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});