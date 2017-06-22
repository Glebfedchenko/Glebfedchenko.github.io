app.directive('servicesDir',function(){
    return {
        restrict:'E',
        templateUrl:'/html/services-section/services.html',
        controller:'servicesCtrl'
    }
});
app.controller('servicesCtrl',function($scope){
$scope.cat = 'web';
});