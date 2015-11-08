'use strict';

var app = angular
  .module('UberForEducation', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://uberforeducation1.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TopicController'     
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TopicController'
      })
      .when('/edit/:topicId', {
        templateUrl: 'views/edit.html',
        controller: 'TopicController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
