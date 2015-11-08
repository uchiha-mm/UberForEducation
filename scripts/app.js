'use strict';

var app = angular
  .module('UberForEducation', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
