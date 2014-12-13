var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('welcome', {
            url: "/",
            templateUrl: "states/welcome.html"
        })
        .state('products', {
            url: "/contact",
            templateUrl: "states/products.html",
            controller: 'products'
        })
        .state('products.product', {
            url: "/product/:id",
            templateUrl: "states/product.html",
            controller: 'product'
        })
});

myApp.controller('products', function($scope) {
    $scope.products = [
        {id:1, name: 'AngularJS'},
        {id:2, name: 'ReactJS'},
        {id:3, name: 'EmberJS'},
    ];
})

myApp.controller('product', function($scope,$filter, $stateParams) {
    $scope.id = $stateParams.id;
    $scope.product = $filter('filter')($scope.products, $stateParams.id)[0];
})
