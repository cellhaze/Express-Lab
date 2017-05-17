(function() {
    
    var app = angular.module("lyricsMod");

    app.controller('lyricCtrl', function($scope, randService){
        console.log('controler has loaded');
         randService.setLyrics().then(function (){ 
            $scope.lyrics = randService.getLyrics();
         });
    });
    
})();