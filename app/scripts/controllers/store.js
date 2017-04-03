'use strict';

/**
 * @ngdoc function
 * @name underratedYouthApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the underratedYouthApp
 */
angular.module('underratedYouthApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
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
  });
