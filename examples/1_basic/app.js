var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('welcome', {
            url: "/",
            templateUrl: "views/welcome.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html",
            controller: 'ContactController'
        })

    $urlRouterProvider.otherwise("/");
});

myApp.controller('ContactController', function($scope) {
    $scope.sendMessage = function(){
        alert('SEND: '+$scope.message);
    };
})


