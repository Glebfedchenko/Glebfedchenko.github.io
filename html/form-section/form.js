app.directive('formDir',function(){
    return {
        restrict:'E',
        templateUrl:'../html/form-section/form.html',
        controller:'formCtrl'
    }
});
app.controller('formCtrl',function($scope){
    $scope.name =' ';
    $scope.email = ' ';
    $scope.message = ' ';
    $scope.nameRegexp = /^[a-zA-Z]*$/;
    $scope.emailRegexp = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i;
    $scope.click = function(){
        alert('Your message has been sent');
    }
});