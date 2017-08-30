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
      url: '/assets/pic1.jpg',
    }, {
      id: '2',
      category: 'web',
      name: 'tiger',
      url: '/assets/pic2.jpg',
    }, {
      id: '3',
      category: 'web',
      name: 'panda',
      url: '/assets/pic3.jpg',
    }, {
      id: '4',
      category: 'web',
      name: 'panda',
      url: '/assets/pic4.jpg',
    }, {
      id: '5',
      category: 'photography',
      name: 'panda',
      url: '/assets/pic5.jpg',
    }, {
      id: '6',
      category: 'photography',
      name: 'panda',
      url: '/assets/pic6.jpg',
    }, {
      id: '7',
      category: 'photography',
      name: 'panda',
      url: '/assets/pic7.jpg',
    }, {
      id: '8',
      category: 'photography',
      name: 'panda',
      url: '/assets/pic8.jpg',
    }, {
      id: '9',
      category: 'design',
      name: 'panda',
      url: '/assets/pic9.jpg',
    }, {
      id: '10',
      category: 'design',
      name: 'panda',
      url: '/assets/pic10.jpg',
    }, {
      id: '11',
      category: 'design',
      name: 'panda',
      url: '/assets/pic11.jpg',
    }, {
      id: '12',
      category: 'design',
      name: 'panda',
      url: '/assets/pic12.jpg',
    }

  ];

});