'use strict';

app.controller('AuthController', function($scope, $location, toaster, Auth) {

  if(Auth.user.provider) {
    $location.path('/');
  }

	$scope.register = function(user) {
    console.log("inside controller")
    Auth.register(user)
      .then(function(data) {
          console.log(data);
        toaster.pop('success', "Registered successfully");
        $location.path('/' );
      }, function(err) {
        console.log(err)
        toaster.pop('error', "Oops! Something went wrong.");
      });
	};

	$scope.login = function(user) {

    Auth.login(user)
      .then(function() {
        toaster.pop('success', "Logged in successfully");
        $location.path('/');
      }, function(err) {

        toaster.pop('error', "Oops! Something went wrong.");
        // errMessage(err);
      });
	};

	$scope.changePassword = function(user) {

    Auth.changePassword(user)
      .then(function() {

        // Reset form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        toaster.pop('success', "Password changed successfully");
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
        // errMessage(err);
      });
  };

	// function errMessage(err) {

 //    var msg = "Unknown Error...";

 //    if(err && err.code) {
 //      switch (err.code) {
 //        case "EMAIL_TAKEN":
 //          msg = "This email has been taken"; break;
 //        case "INVALID_EMAIL":
 //          msg = "Invalid email"; break;
 //        case "NETWORK_ERROR":
 //          msg = "Network error"; break;
 //        case "INVALID_PASSWORD":
 //          msg = "Invalid password"; break;
 //        case "INVALID_USER":
 //          msg = "Invalid user"; break;
 //      }
 //    }

 //    toaster.pop('error', msg);
 //  };


});
