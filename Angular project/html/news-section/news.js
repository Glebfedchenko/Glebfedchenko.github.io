app.directive('newsDir', function () {
    return {
        restrict: 'E',
        templateUrl: '/html/news-section/news.html',
        controller: 'newsCtrl'
    }
});
app.controller('newsCtrl', function ($scope, $http) {
    $http.get('/html/news-section/data.json').success(function (data) {
        $scope.items = data;
    })
});

app.controller('newsDetailsCtrl', function ($scope, $http, $routeParams) {
    $http.get('/html/news-section/data.json').success(function (data) {
        $scope.items = data;
        $scope.whichnews = $routeParams.newsId;
    })
});