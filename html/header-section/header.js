app.directive('headDir',function(){
    return {
        restrict:'E',
        templateUrl:'/html/header-section/header.html',
        controller:'headerCtrl'
    }
});
app.controller('headerCtrl',function($scope, $anchorScroll, $location, $document){

});