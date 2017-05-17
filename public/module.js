var app = angular.module("lyricsMod", ["ngRoute"]);
    

app.config(function($routeProvider) {

        $routeProvider.when("/random-lyric", {
            templateUrl: "random-lyric.html",
            controller: "lyricCtrl"
        })

    //html file not created yet
            .when("/lyrics", {
            templateUrl: "lyrics.html",
            controller: "secondCtrl"
        })
            .otherwise({
            template: "Not working!"
        })
    });


        
