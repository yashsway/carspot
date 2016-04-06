// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var base = angular.module('base', ['ionic', 'ui.bootstrap', 'lumx'])

base.run(function ($ionicPlatform) {
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
base.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
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


base.controller('helpAccordionData', ['$scope', function ($scope) {
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
}]);

base.controller('carProperties', ['carSearch',function (carSearch) {
    this.type = ["Sedan", "Hatchback", "Minivan", "SUV", "Coupe", "Truck"];
    this.manufacturer = ["Volkswagen", "Honda", "Ford", "Chevrolet", "Toyota", "Dodge", "Mercedes Benz", "Hyundai"];
    this.passengers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.origin = ["American", "German", "Japanese", "Korean"];
    this.usrType = "";
    this.usrManf = "";
    this.usrPassengers = 0;
    this.usrOrigin = "";
    this.results = [];
    this.getQuery = function getQuery() {
        //TEST: Checking search query parameters
        console.log("Search Query:"+JSON.stringify({"type":this.usrType,"manufacturer":this.usrManf,"passengers":this.usrPassengers,"origin":this.usrOrigin}));
        return {"type":this.usrType,"manufacturer":this.usrManf,"passengers":this.usrPassengers,"origin":this.usrOrigin};
    };
    this.getResult = function getResult(){
        this.results = carSearch.search(this.usrType,this.usrManf,this.usrPassengers,this.usrOrigin);
    }
    this.getHistory = function getHistory(index){
        return carSearch.displayHistory(index);
    }
}]);

base.factory('carSearch', ['carSelector', function (carSelector) {

    var history = [];
    var add = function add(car){

        if (history.length <5){ //if array not full, prepends new car to array
            history.unshift(car);
        }
        else{   //if history already full, removes 5th element and prepends new car to array
            history.pop();
            history.unshift(car);
        }
        console.log(history);
    }
    var displayHistory = function displayHistory(index){
        if (index<history.length){
            return history[index];
        }
        return "";
    }

    var search = function search(usrType,usrManf,usrPassengers,usrOrigin) {
        //sharons algo
        var array1 = carSelector.getType(usrType);
        var array2 = carSelector.getManu(usrManf);
        var array3 = carSelector.getPass(usrPassengers);
        var array4 = carSelector.getOrigin(usrOrigin);

        var results = [];
        for (i = 0; i < array1.length; i++) {
            for (j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j]) {
                    for (k = 0; k < array3.length; k++) {
                        if (array1[i] == array3[k]) {
                            results.push(array3[k]);
                        }
                    }
                }
            }
        }
        add(results[0]);

        return results;
    };
    return {
        search: search,
        displayHistory: displayHistory,
        add: add
    };
}]);

base.factory('carSelector', function () {
    //database
    var carTypeArray = [["Honda Civic", "Sedan"], ["Honda Accord", "Coupe"], ["Honda CRV", "SUV"], ["Volkswagen Tiguan", "SUV"], ["Volkswagen Jetta", "Sedan"], ["Volkswagen Eos", "Coupe"], ["Ford Focus", "Sedan"], ["Ford Escape", "SUV"], ["Ford Mustang", "Coupe"], ["Ford Explorer", "SUV"], ["Chevrolet Cruze", "Sedan"], ["Chevrolet Silverado", "Truck"], ["Chevrolet Traverse", "SUV"], ["Toyota Corolla", "Sedan"], ["Toyota Tundra", "Truck"], ["Toyota Sequoia", "SUV"], ["Dodge Charger", "Sedan"], ["Dodge Journey", "SUV"], ["Dodge Grand Caravan", "Minivan"], ["Mercedes Benz CLS", "Coupe"], ["Mercedes Benz CLA", "Sedan"], ["Mercedes Benz GLA", "SUV"], ["Hyundai Sonata", "Sedan"], ["Hyundai Tucson", "SUV"], ["Hyundai Veloster", "Coupe"]];
    var carManufacturerArray = [["Honda Civic", "Honda"], ["Honda Accord", "Honda"], ["Honda CRV", "Honda"], ["Volkswagen Tiguan", "Volkswagen"], ["Volkswagen Jetta", "Volkswagen"], ["Volkswagen Eos", "Volkswagen"], ["Ford Focus", "Ford"], ["Ford Escape", "Ford"], ["Ford Mustang", "Ford"], ["Ford Explorer", "Ford"], ["Chevrolet Cruze", "Chevrolet"], ["Chevrolet Silverado", "Chevrolet"], ["Chevrolet Traverse", "Chevrolet"], ["Toyota Corolla", "Toyota"], ["Toyota Tundra", "Toyota"], ["Toyota Sequoia", "Toyota"], ["Dodge Charger", "Dodge"], ["Dodge Journey", "Dodge"], ["Dodge Grand Caravan", "Dodge"], ["Mercedes Benz CLS", "Mercedes Benz"], ["Mercedes Benz CLA", "Mercedes Benz"], ["Mercedes Benz GLA", "Mercedes Benz"], ["Hyundai Sonata", "Hyundai"], ["Hyundai Tucson", "Hyundai"], ["Hyundai Veloster", "Hyundai"]];
    var carPassengersArray = [["Honda Civic", "5"], ["Honda Accord", "5"], ["Honda CRV", "5"], ["Volkswagen Tiguan", "5"], ["Volkswagen Jetta", "5"], ["Volkswagen Eos", "4"], ["Ford Focus", "5"], ["Ford Escape", "5"], ["Ford Mustang", "4"], ["Ford Explorer", "7"], ["Chevrolet Cruze", "5"], ["Chevrolet Silverado", "5"], ["Chevrolet Traverse", "7"], ["Toyota Corolla", "5"], ["Toyota Tundra", "3"], ["Toyota Sequoia", "8"], ["Dodge Charger", "5"], ["Dodge Journey", "7"], ["Dodge Grand Caravan", "8"], ["Mercedes Benz CLS", "5"], ["Mercedes Benz CLA", "5"], ["Mercedes Benz GLA", "7"], ["Hyundai Sonata", "5"], ["Hyundai Tucson", "5"], ["Hyundai Veloster", "5"]];
    var carOriginArray = [["Honda Civic", "Japanese"], ["Honda Accord", "Japanese"], ["Honda CRV", "Japanese"], ["Volkswagen Tiguan", "German"], ["Volkswagen Jetta", "German"], ["Volkswagen Eos", "German"], ["Ford Focus", "American"], ["Ford Escape", "American"], ["Ford Mustang", "American"], ["Ford Explorer", "American"], ["Chevrolet Cruze", "American"], ["Chevrolet Silverado", "American"], ["Chevrolet Traverse", "American"], ["Toyota Corolla", "Japanese"], ["Toyota Tundra", "Japanese"], ["Toyota Sequoia", "Japanese"], ["Dodge Charger", "American"], ["Dodge Journey", "American"], ["Dodge Grand Caravan", "American"], ["Mercedes Benz CLS", "German"], ["Mercedes Benz CLA", "German"], ["Mercedes Benz GLA", "German"], ["Hyundai Sonata", "Korean"], ["Hyundai Tucson", "Korean"], ["Hyundai Veloster", "Korean"]];

    //david's algo
    var getType = function (inType) {
        var typeArray = [];
        for (i = 0; i < carTypeArray.length; i++) {
            if (inType == carTypeArray[i][1]) {
                typeArray.push(carTypeArray[i][0]);
            }
        }
        return typeArray;
    };

    var getManu = function (inManu) {
        var manuArray = [];
        for (i = 0; i < carManufacturerArray.length; i++) {
            if (inManu == carManufacturerArray[i][1]) {
                manuArray.push(carManufacturerArray[i][0]);
            }
        }
        return manuArray;
    };

    var getPass = function (inPass) {
        var passArray = [];
        for (i = 0; i < carPassengersArray.length; i++) {
            if (inPass == carPassengersArray[i][1]) {
                passArray.push(carPassengersArray[i][0]);
            }
        }
        return passArray;
    };

    var getOrigin = function (inOrigin) {
        var originArray = [];
        for (i = 0; i < carOriginArray.length; i++) {
            if (inOrigin == carOriginArray[i][1]) {
                originArray.push(carOriginArray[i][0]);
            }
        }
        return originArray;
    };

    return {
        getType: getType,
        getOrigin: getOrigin,
        getManu: getManu,
        getPass: getPass
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
