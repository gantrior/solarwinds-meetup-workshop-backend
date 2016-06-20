;(function(ng) {
  'use strict';

  ng.module('solarwinds-meetup-workshop')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
