'use strict';

/**
 * @ngdoc function
 * @name underratedYouthApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the underratedYouthApp
 */
angular.module('underratedYouthApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.cat = category;

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

    console.log($scope.cat);
    $scope.customer = {
      address1 : 'address1',
      address2 : 'address2',
      city:'city'
    }

    $scope.products = products;
    console.log(products[0].price.data.formatted.without_tax);

  });
