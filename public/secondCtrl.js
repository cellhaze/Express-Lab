(function() {
    
    var app = angular.module("lyricsMod");

    app.controller('secondCtrl', function($scope, randService){
        console.log('controler has loaded');
         randService.setLyric().then(function (){ 
            $scope.lyric = randService.getLyric();
         });
    });
    
})();