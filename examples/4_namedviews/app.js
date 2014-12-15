var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('welcome', {
            url: "/",
            templateUrl: "views/welcome.html"
        })
        .state('app', {
            abstract: true,
            views: {
                "": {
                    templateUrl: "views/layout.html"
                },
                "navbar@app": {
                    templateUrl: "views/navbar.html"
                }
            }
        })
        .state('products', {
            url: "/products",
            parent: 'app',
            views: {
                "": {
                    templateUrl: "views/products.html"
                },
                "content@products": {
                    template: "Default product list page, ready for your customization"
                },
                "menu@products": {
                    templateUrl: "views/menu.html",
                    controller: 'ProductsController'
                }
            },
            resolve: {
                products: function(){
                    return [
                        {id:1, name: 'AngularJS', features:['routing', 'services', 'directives', 'data binding']},
                        {id:2, name: 'ReactJS', features:['faster', 'routing', 'data binding']},
                        {id:3, name: 'EmberJS', features:['fast', 'routing', 'data binding']},
                    ]
                }
            }
        })

        .state('products.product', {
            url: "/product/:id",
            views: {
                "content@products": {
                    templateUrl: "views/feature-list.html",
                    controller: 'FeatureListController'
                }
            }
        })
        .state('contact', {
            url: "/products",
            parent: 'app',
            views: {
                "": {
                    templateUrl: "views/contact.html"
                }
            },
            resolve: {
                products: function(){
                    return [
                        {id:1, name: 'AngularJS', features:['routing', 'services', 'directives', 'data binding']},
                        {id:2, name: 'ReactJS', features:['faster', 'routing', 'data binding']},
                        {id:3, name: 'EmberJS', features:['fast', 'routing', 'data binding']},
                    ]
                }
            }
        })
});

myApp.controller('ProductsController', function($scope, products) {
    $scope.products = products;
})

myApp.controller('FeatureListController', function($scope,$filter, $stateParams, products) {
    $scope.id = $stateParams.id;
    $scope.product = $filter('filter')(products, $stateParams.id)[0];
})

