'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];


function PhoneListCtrl($scope) {
    $scope.phones = [{
        "name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S.",
        "age": 0
    }, {
        "name": "Motorola XOOM™ with Wi-Fi",
        "snippet": "The Next, Next Generation tablet.",
        "age": 1
    }, {
        "name": "MOTOROLA XOOM™",
        "snippet": "The Next, Next Generation tablet.",
        "age": 2
    }];

    $scope.orderProp = 'age';
}

function PhoneListCtrl2($scope, Phone) {
    // $http.get('phones/phones.json').success(function(data) {
    //     $scope.phones = data;
    // });
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';
}
PhoneListCtrl.$inject = ['$scope', 'Phone'];

function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
    // $scope.phoneId = $routeParams.phoneId;
}

PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];