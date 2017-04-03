'use strict';

/**
 * @ngdoc function
 * @name underratedYouthApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the underratedYouthApp
 */
angular.module('underratedYouthApp')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.prod = product;
    console.log(product);
    $scope.addStatus = null;
    console.log(moltin);

    $( ".pre-loader" ).show();

    // $('#hero-title').hide();
    $('.menu-btn').hide();
    $('.ngContent').hide();

    function hideLoader() {
      // $('.loader').hide();
      $( ".pre-loader" ).fadeOut( "slow", function() {
        $('.menu-btn').fadeIn("slow");
        $('.ngContent').fadeIn("slow");
      });
    }
    setTimeout(hideLoader, 2000);

    $('.menu-btn').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );

    $scope.addCart = function() {
      $scope.addStatus = 'Adding to cart ...';
      moltin.Cart.Insert(product.id, 1, null, function(cart) {
        // $scope.apply();
        $scope.addStatus = 'Success!';
        console.log(cart);
        $timeout(function() {
          $scope.addStatus = null;
        }, 1000);
      });
    }
    // console.log(product);
  });
