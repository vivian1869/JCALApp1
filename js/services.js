angular.module('app.services', [])

.service('Enquiry', ['$q', '$http', function($q, $http){

    var api_url = 'https://sheetsu.com/apis/v1.0/b956303696d9';
    var currentID = 1;

    var ret = {
        all: function(){
            var deferred = $q.defer(); 
            
                $http.get(api_url).then(function(resp){
                    
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                deferred.resolve(resp.data); 
            });
                return deferred.promise;
         
         }, 
        add: function(data){
            var deferred = $q.defer(); 
            currentID++;
            data.id = currentID;
            
            $http.post(api_url, data).then(function(resp){
                 deferred.resolve(resp.data); 
                
            });
                return deferred.promise;
        }
    }
    
    ret.all();
    
    return ret;

}])

/**
 * Message Us Function
*/


.service('Message', ['$q', '$http', function($q, $http){

    var api_url2 = 'https://sheetsu.com/apis/v1.0/31064498543b/sheets/Sheet2';
    var currentMID = 1;

    var ret = {
        all: function(){
            var deferred = $q.defer(); 
            
            $http.get(api_url2).then(function(resp){
                if (resp.data.length > 0) currentMID = parseInt(resp.data[resp.data.length-1].id);
                deferred.resolve(resp.data); 
            });
                return deferred.promise;
        }, 
        add: function(data){
            var deferred = $q.defer(); 
            currentMID++;
            data.id = currentMID;
            
            $http.post(api_url2, data).then(function(resp){
                 deferred.resolve(resp.data); 
                
            });
                return deferred.promise;
        }
    }
    
    ret.all();
    
    return ret;

}]);
