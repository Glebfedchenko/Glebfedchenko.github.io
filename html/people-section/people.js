app.directive('peopleDir', function () {
    return {
        restrict: 'E',
        templateUrl: '/html/people-section/people.html',
        controller: 'peopleCtrl'
    }
});
app.controller('peopleCtrl', function ($scope) {
    $scope.team = [
        {
            name: 'William Hurt',
            position: 'Sr. Web Developer',
            avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/d05.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
                {
            name: 'Sam Hurt',
            position: 'Md. Web Developer',
            avatar: 'http://www.viviconstile.org/images/avatars/G03.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
                {
            name: 'Jack Hurt',
            position: 'Jr. Web Developer',
            avatar: 'http://www.viviconstile.org/images/avatars/H01.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
                {
            name: 'Sarah Hurt',
            position: 'Sr. Web Designer',
            avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh05.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },

    ]
});