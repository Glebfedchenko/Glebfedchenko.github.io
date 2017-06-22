var app = angular.module('app', ['ngRoute', 'ngMessages', 'duScroll', 'countUpModule', 'scrollSpyModule']);

app.controller('mainCtrl', function ($scope, $anchorScroll, $location, $document) {
    var duration = 2000;
    var offset = 0;
    $scope.scroll = function (id) {
        $location.hash(id);
        var el = angular.element(document.getElementById(id));
        $document.scrollToElement(el, offset, duration);
    };
});
app.config(function ($routeProvider) {
    $routeProvider.when('/:newsId', {
        templateUrl: '/html/news-section/newsdetails.html',
        controller: 'newsDetailsCtrl'
    });
})