'use strict';

app.controller('TopicController', function($scope, $firebase, FURL, $location, $routeParams, toaster) {

	var ref = new Firebase(FURL);
	var fbTopics = $firebase(ref.child('topics')).$asArray();
	var topicId = $routeParams.topicId;

	$scope.topics = fbTopics;
	
	if(topicId) {
		$scope.selectedTopic = getTopic(topicId);
	}

	function getTopic(topicId) {
		return $firebase(ref.child('topics').child(topicId)).$asObject();
	};

	$scope.postTopic = function(topic) {
		$scope.topics.$add(topic);
		toaster.pop('success', 'Topic created successfully.');
		$location.path('/');
	};	

	$scope.updateTopic = function(topic) {
		$scope.selectedTopic.$save(topic);
		toaster.pop('success', "Topic is updated.");
		$location.path('/');
	};

});