var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('welcome', {
            url: "/welcome",
            templateUrl: "states/welcome.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "states/contact.html",
            controller: 'contact'
        })

    $urlRouterProvider.otherwise("/welcome");
});

myApp.controller('contact', function($scope) {
    $scope.sendMessage = function(){
        alert('SEND: '+$scope.message);
    };
})
