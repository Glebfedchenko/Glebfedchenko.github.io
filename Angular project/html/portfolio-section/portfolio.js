app.directive('portfolioDir',function(){
    return {
        restrict:'E',
        templateUrl:'/html/portfolio-section/portfolio.html',
        controller:'portfolioCtrl'
    }
});
app.controller('portfolioCtrl',function($scope){
$scope.categories = ['ALL', 'WEB', 'PHOTOGRAPHY', 'GRAPHIC DESIGN'];
  $scope.images = [{
      id: '1',
      category: 'web',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_421.jpg',
    }, {
      id: '2',
      category: 'web',
      name: 'tiger',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_422.jpg',
    }, {
      id: '3',
      category: 'web',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_423.jpg',
    }, {
      id: '4',
      category: 'web',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_424.jpg',
    }, {
      id: '5',
      category: 'photography',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_425.jpg',
    }, {
      id: '6',
      category: 'photography',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_430.jpg',
    }, {
      id: '7',
      category: 'photography',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_432.jpg',
    }, {
      id: '8',
      category: 'photography',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_431.jpg',
    }, {
      id: '9',
      category: 'design',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_444.jpg',
    }, {
      id: '10',
      category: 'design',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_436.jpg',
    }, {
      id: '11',
      category: 'design',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_456.jpg',
    }, {
      id: '12',
      category: 'design',
      name: 'panda',
      url: 'http://picsdesktop.com/space/560x420/www.PicsDesktop.com_452.jpg',
    }

  ];

});