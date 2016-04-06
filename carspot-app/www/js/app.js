// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var homePage = angular.module('home', ['ionic', 'ui.bootstrap', 'lumx'])

homePage.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
homePage.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
            url: "/home",
            views: {
                'home-tab': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('tabs.search', {
            url: '/search',
            views: {
                'search-tab': {
                    templateUrl: 'templates/search.html'
                }
            }
        })
        .state('tabs.help', {
            url: "/help",
            views: {
                'help-tab': {
                    templateUrl: 'templates/help.html'
                }
            }
        });
    $urlRouterProvider.otherwise("/tab/home");
});
homePage.controller('homeCtrl', function ($scope) {
    $scope.displayMessage = function () {
        $scope.message = 'Welcome to CarSpot!';
    }
});

homePage.controller('helpAccordionData', function($scope){
    $scope.articles = [
        {
            title: "How to search for cars",
            content: "First do this, then do this."
        },
        {
            title: "How search history works",
            content: "And do more of this."
        },
        {
            title: "How to send feedback",
            content: "Select the feedback tab from navigation bar located at bottom of this app."
        },
        {
            title: "About",
            content: "By Yash, Cole, Sharon, David and Abhijit."
        }
    ];
});

angular.module('CarProperties', [])
.controller('CarPropertiesController', function() {
  this.type;
  this.manufacturer;
  this.passengers;
  this.origin;

  function createJSON() {
    //create the JSON
  };
});
//homePage.controller('AlertDemoCtrl', function ($scope) {
//  $scope.alerts = [
//    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
//    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
//  ];
//
//  $scope.addAlert = function() {
//    $scope.alerts.push({msg: 'Another alert!'});
//  };
//
//  $scope.closeAlert = function(index) {
//    $scope.alerts.splice(index, 1);
//  };
//});
