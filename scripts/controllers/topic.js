'use strict';

app.controller('TopicController', function($scope, $firebase, FURL, $location, $routeParams, toaster) {

    var ref = new Firebase(FURL);
    var fbTopics = $firebase(ref.child('topics')).$asArray();
    var fbTags = $firebase(ref.child('tags')).$asArray();
    var topicId = $routeParams.topicId;

    $scope.topics = fbTopics;
    $scope.tags = ["abc", "ghf"];

    if (topicId) {

        getTopic(topicId).$loaded().then(function(data) {
            console.log(data)
            $scope.selectedTopic = data;
            $scope.startDate = new Date(data.startDate);
            $scope.endDate = new Date(data.endDate);
        });



        // setTimeout(function() {
        //     console.log($scope.selectedTopic.endDate)
        //     $scope.startDate = new Date($scope.selectedTopic.startDate);
        //     $scope.endDate = new Date($scope.selectedTopic.endDate);
        // }, 1000)


    }

    function getTopic(topicId) {
        return $firebase(ref.child('topics').child(topicId)).$asObject();
    };

    $scope.postTopic = function(topic) {
        if ($scope.startDate > $scope.endDate) {
            toaster.pop('error', "End date is before the start date.");
        } else {
            topic.startDate = $scope.startDate.toString();
            topic.endDate = $scope.endDate.toString();
            console.log(topic);
            $scope.topics.$add(topic);
            toaster.pop('success', 'Topic created successfully.');
            $location.path('/');

        }
    };

    $scope.updateTopic = function(topic) {
        
        topic.startDate = $scope.startDate.toString();
        topic.endDate = $scope.endDate.toString();
        $scope.selectedTopic.$save(topic);
        toaster.pop('success', "Topic is updated.");
        $location.path('/');
    };

});