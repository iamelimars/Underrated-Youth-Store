'use strict';

/**
 * @ngdoc overview
 * @name underratedYouthApp
 * @description
 * # underratedYouthApp
 *
 * Main module of the application.
 */
angular
  .module('underratedYouthApp', [
    'underratedYouth.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  // .directive("categoryHeader", function() {
  //   // var controller = ['$scope', function($scope) {
  //   //
  //   // }],
  //   return {
  //     // template : "<h1>Made by a directive!</h1>"
  //     templateUrl: 'views/headerPartial.html',
  //     controller: 'HeaderCtrl'
  //   }
  // })
  .controller('headerCtrl', function ($scope, $q, MoltinAuth) {
    // getMenu(MoltinAuth)
    //   .then(
    //     function(moltin) {
    //       console.log(moltin);
    //       moltin.Category.List(null, function(categories) {
    //         $scope.cat = categories;
    //         console.log($scope.cat);
    //       });
    //     },
    //     function(reason) {
    //
    //     }
    //   );

    function getCategories() {
      var deferred = $q.defer();
      $q.when(MoltinAuth).then(function(moltin) {
        moltin.Category.List(null, function(categories) {
          deferred.resolve(categories);
          $scope.cat = categories;
          // console.log($scope.cats);

        });

      })
      console.log($scope);
      return deferred.promise;
    };

      var promise = getCategories();
      promise.then(function(menuCategories) {
        console.log(menuCategories);
      });


    // if (MoltinAuth) {
    //
    // }
    // var deferred = $q.defer();
    // $q.when(MoltinAuth).then(function(moltin) {
    //   moltin.Category.List(null, function(categories) {
    //     deferred.resolve(categories);
    //     $scope.cats = categories;
    //     // console.log($scope.cats);
    //
    //   });
    //
    // })
    // console.log($scope);
    // return deferred.promise;

    function getMenu(MoltinAuth) {
      return new Promise(
        function(resolve, reject) {
          if (MoltinAuth) {
            resolve(MoltinAuth);
          } else {
            // getMenu();
          }
        });
    }

  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve: {

          categories: function($q, MoltinAuth) {

            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(categories) {
                deferred.resolve(categories);
              });
              // console.log(deferred.promise);
            })
            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        resolve: {
          category: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category) {
                deferred.resolve(category);
              });
              // console.log(deferred.promise);
            })
            return deferred.promise;
          },
          products: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products) {
                deferred.resolve(products);
              });
              // console.log(deferred.promise);
            })
            return deferred.promise;
          }
        }

      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve: {
          product: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deferred.resolve(product);
              });
              // console.log(deferred.promise);
            })
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
      // $locationProvider.html5Mode({
      //    enabled: true,
      //    requireBase: false
      // });
  });
