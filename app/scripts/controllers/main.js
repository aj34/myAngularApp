//'use strict';

myApp.controller('MainCtrl',function($scope, photoSearchService){
    $scope.thumbSize = 'small';

    $scope.setThumbSize = function(size) {
        $scope.thumbSize = size;
    };

    $scope.photos = [];

    $scope.submitSearch = function () {
        $scope.photos = [];

        flickrCallback = function(data){
            $scope.photos = data.items;
        };

        photoSearchService.get({tags:$scope.searchKeyword, format:"json", jsoncallback:"flickrCallback"});
    };
});
