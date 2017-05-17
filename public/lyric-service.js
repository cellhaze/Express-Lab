app.service('randService', function($http){

   var lyricsList = [];
    
    this.setLyrics = function() {
    
        var promise = $http({
                method: 'GET',
                url: '/lyrics'
            }).then(function callBack(response) {
                console.log(response.data);
                lyricList = response.data;
            
            }, function(error) {
                console.log("error");
        });
        return promise; 
     }    
        this.getLyrics = function() {
            return lyricList;
        }
        
        
    
    var singleLyric = "";
    
    this.setLyric = function() {
    
        var promise = $http({
                method: 'GET',
                url: '/random-lyric'
            }).then(function callBack(response) {
                console.log(response.data);
                singleLyric = response.data;
            
            }, function(error) {
                console.log("error");
        });
        return promise; 
     }    
        this.getLyric = function() {
            return singleLyric;
        }
//        $http({
//                method: 'GET',
//                url: '/lyrics'
//            }).then(function callBack(response.data) {
//                console.log("response.data");
//                
//            }, function(error) {
//                console.log("error");
//        });
    
});