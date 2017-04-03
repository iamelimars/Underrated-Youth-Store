'use strict';

/**
 * @ngdoc function
 * @name underratedYouthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underratedYouthApp
 */
angular.module('underratedYouthApp')
  .controller('MainCtrl', function () {
    
    $( ".pre-loader" ).show();
    $('#hero').hide();
    // $('#hero').hide();
    $('.menu-btn').hide();
    $('.content').hide();

    function hideLoader() {
      // $('.loader').hide();
      $( ".pre-loader" ).fadeOut( "slow", function() {
        $('#hero').fadeIn("slow");
        $('.menu-btn').fadeIn("slow");
        $('.content').fadeIn("slow");
      });
    }
    setTimeout(hideLoader, 3000);

    $('.menu-btn').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
    var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

      });
    };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
