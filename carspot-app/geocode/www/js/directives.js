angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(0,0),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
          //new code
    map = new google.maps.Map(document.getElementById("map"), mapProp);

          //$.getJSON(json, function(json1) {

         //     $.each(json1, function(key, data) {

                 var latLng = new google.maps.LatLng(data.lat, data.lng);

                 var marker = new google.maps.Marker({
                      position:   latLng,
                      map:        map,
                      icon:       icon,
                      title:      data.title
                  });




          //new co

        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
