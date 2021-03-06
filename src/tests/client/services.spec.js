describe('Services', function() {
  // Run these tests with karma start from the command line

  // Import the corresponding module
  beforeEach(module('foodfood'));

  describe('RestaurantAndRoute factory', function() {
    var $httpBackend, RestaurantAndRoute;

    // inject the necessary dependencies
    beforeEach(inject(function (_$httpBackend_, _RestaurantAndRoute_) {
      $httpBackend = _$httpBackend_;
      RestaurantAndRoute = _RestaurantAndRoute_;
    }));

    // these tests just test for the existence of our methods
    it('should exist', function() {
      expect(RestaurantAndRoute).to.exist;
    });

    it('should have a method `fetchRestaurants`', function() {
      expect(RestaurantAndRoute.fetchRestaurants).to.be.a('function');
    });

    it('should have a method `getRestaurants`', function() {
      expect(RestaurantAndRoute.getRestaurants).to.be.a('function');
    });


    it('should have a method `addMarkers`', function() {
      expect(RestaurantAndRoute.addMarkers).to.be.a('function');
    });

    it('should have a method `removeMarkers`', function() {
      expect(RestaurantAndRoute.removeMarkers).to.be.a('function');
    });

    it('should have a method `calculateAndDisplayRoute`', function() {
      expect(RestaurantAndRoute.calculateAndDisplayRoute).to.be.a('function');
    });

    it('should have a method `openInfoWindow`', function() {
      expect(RestaurantAndRoute.openInfoWindow).to.be.a('function');
    });

  });

});
