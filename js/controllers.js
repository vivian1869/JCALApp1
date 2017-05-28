angular.module('app.controllers', [])
  
.controller('jobCentreAustraliaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
    $scope.openurl = function(url){
    window.open(url, '_system', 'height=400,width=400');   // may also try $window
} 
    
    
/*
    $scope.state * [
        {
            'id': 'ACT',
            'label': 'ACT'
        },
        {
            'id': 'NSW',
            'label': 'NSW'
        },
        {
            'id': 'QLD',
            'label': 'QLD'
        }
    ];
    
    
 $scope.enquiry * [
        {
            'id': 'I am looking for work',
            'label': 'I am looking for work'
        },
        {
            'id': 'I am looking for staff',
            'label': 'I am looking for staff'
        },
        {
            'id': 'I am interested in training or courses',
            'label': 'I am interested in training or courses'
        },
        {
            'id': 'NDIS - Choice and Control',
            'labe1': 'NDIS - Choice and Control'
        },
        {
            'id': 'Aboriginal Employment Pathways Program',
            'label': 'Aboriginal Employment Pathways Program'
        },
        {
            'id': 'Golden Opportunities',
            'label': 'Golden Opportunities'
        },
        {
            'id': 'Other',
            'label': 'Other'
        }
    ];
     $scope.data * {
        
        'state': $scope.states[0].id,
        'enquiry': $scope.enquirys[0].id,
        'methodcontact': 'Phone',
        'yourmessage': ''
        
         }
   */
}
])
   
.controller('contactUsCtrl', ['$scope', '$stateParams', 'Enquiry', '$ionicPopup', '$state', '$ionicUser', '$rootScope', '$ionicAuth', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Enquiry, $ionicPopup, $state, $ionicUser, $rootScope, $ionicAuth, $ionicHistory) {
var local = new Date();
var offset = local.getTimezoneOffset() / 60;
var date = local + "-" + offset + ":00";

function checkLoggedInContact(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function() {
        $state.go('tabsController.messageUs');
            });
        }else{
            $ionicHistory.nextViewOptions({
          historyRoot: true
        });
            $scope.data = {
                name: '',
                phone: '',
                email: '',
                state: '',
                suburb: '',
                enquiry: '',
                preferred_contact: 'Phone',
                message: '',
                datesubmitted: date
            }
        }
    }
 
 checkLoggedInContact();
 
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Enquiry.add($scope.data).then(function(){
            $scope.data = {
                name: '',
                phone: '',
                email: '',
                state: '',
                suburb: '',
                enquiry: '',
                preferred_method_of_contact: '',
                message: '',
                datesubmitted: ''
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: 'Thank you!',
                template: 'Your Enquiry has been submitted.'
            });
           
        })
        $state.go('tabsController.jobCentreAustralia2');
    }

}])
   
.controller('messageUsCtrl', ['$scope', '$stateParams', 'Message', '$ionicPopup', '$state', '$ionicUser', '$rootScope', '$ionicAuth', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Message, $ionicPopup, $state, $ionicUser, $rootScope, $ionicAuth, $ionicHistory) {
var local = new Date();
var offset = local.getTimezoneOffset() / 60;
var date = local + "-" + offset + ":00";

function checkLoggedInContact(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function() {
        $scope.userData = $ionicUser.details;
        $scope.customdata = $ionicUser.get('user details');
            $scope.data = {
                name: $ionicUser.details.name,
                email: $ionicUser.details.email,
                enquiry: '',
                preferred_contact: 'Phone',
                message: '',
                datesubmitted: date,
                userdetails: $ionicUser.get('user details')
            };
            });
        }else{
             $ionicHistory.nextViewOptions({
          historyRoot: true
        });
            $scope.userData = {}; 
            $state.go('tabsController.login');
        }
    }
 
 checkLoggedInContact();
 
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Message.add($scope.data).then(function(){
            $scope.data = {
                name: '',
                email: '',
                enquiry: '',
                preferred_method_of_contact: '',
                message: '',
                datesubmitted: '',
                userdetails: ''
            };
          $scope.submitting = false;
            
            $ionicPopup.alert({
                title: 'Thank you!',
                template: 'Your message has been sent.'
            });
           
        });
        $state.go('tabsController.jobCentreAustralia2');
    };

}])
   
.controller('servicesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('jobsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('findUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $ionicHistory, $rootScope) {
    
     $scope.openurl = function(url){
        window.open(url, '_system', 'height=400,width=400'); // may also try $window
      } 

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if ($ionicAuth.isAuthenticated()) {
      // Updated on 1/9/2017 to fix issues with logging
      // out and back in, as well as history issues with side menu + tabs.
      $ionicUser.load().then(function() {
        $rootScope.$broadcast('login_change');
        $ionicHistory.nextViewOptions({
          historyRoot: true
        });
        $state.go('tabsController.userHome');  
      });
    }
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
          $rootScope.$broadcast('login_change');
            $state.go('tabsController.userHome');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicHistory, $rootScope) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        
        $scope.error = '';

        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            $ionicAuth.login('basic', $scope.data).then(function(){
             /* 
              // Updated on 1/9/2017 to fix issues with logging
                // out and back in, as well as history issues with
              // side menu + tabs.
             */ 
              $rootScope.$broadcast('login_change');
              $ionicHistory.nextViewOptions({
                historyRoot: true
              });
              $state.go('tabsController.userHome');
            });
        }, function(err) {
            
            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }    
        
            $scope.error = error_lookup[err.details[0]];
        });
    }

}])
   
.controller('updateProfileCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicHistory', '$rootScope', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicHistory, $rootScope, $ionicPopup) {
   $scope.data = {
      // 'phone': '',
      // 'StreetAddress': '',
      // 'Suburb': '',
      // 'Postcode': ''
    }
/**    
function checkLoggedInProfile(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function() {
        $scope.userData = $ionicUser.details;
        $scope.customdata = $ionicUser.get('user details');
            $scope.data = {
               // name: $ionicUser.details.name,
               // email: $ionicUser.details.email,
              //  enquiry: '',
              //  message: '',
              //  datesubmitted: date,
              //  userdetails: $ionicUser.get('user details')
            };
            });
        }else{
             $ionicHistory.nextViewOptions({
          historyRoot: true
        });
            $scope.userData = {}; 
            $state.go('tabsController.login');
        }
    }
 
 checkLoggedInProfile();
*/ 

 $scope.customdata = $ionicUser.get('user details');
    
   $scope.update = function(){
        
             // `$ionicUser` is now registered
           $ionicUser.set('user details', $scope.data);
           
           // $ionicUser.set('streetaddress', data.streetaddress);
           // $ionicUser.set('suburb', data.suburb);
           // $ionicUser.set('postcode', data.postcode);
             
            $ionicUser.save();
            
            $ionicPopup.alert({
                title: 'Thank you',
                template: 'Your profile has been updated.'
            });
            
            $state.go('tabsController.userHome');
             
            $ionicUser.load();
            
        }
    
}])
   
.controller('userHomeCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicSideMenuDelegate', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $ionicSideMenuDelegate, $ionicHistory, $rootScope) {
 
 // Updated on 1/9/2017 to fix issues with logging
 // out and back in, as well as history issues with side menu + tabs.
  function checkLoggedIn(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function() {
        $scope.userData = $ionicUser.details;
        $scope.customdata = $ionicUser.get('user details');
            });
        }else{
            $ionicHistory.nextViewOptions({
          historyRoot: true
        });
            $scope.userData = {}; 
            $state.go('tabsController.login');
        }
    }
    
    checkLoggedIn();
    
    $scope.$on('login_change', checkLoggedIn);
   
    
    $scope.logout = function(){
        
        $ionicAuth.logout();
        // Updated on 1/9/2017 to make sure the menu closes when
        // you log out so that it's closed if you log back in.
     $ionicSideMenuDelegate.toggleLeft(false);
     // clear user data
      $scope.userData = '';
      $scope.customdata = '';
        $state.go('tabsController.jobCentreAustralia2');
    }
   
}])
   
.controller('jobCentreAustralia2Ctrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$rootScope', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $rootScope, $ionicHistory) {
    
    $scope.openurl = function(url){
    window.open(url, '_system', 'height=400,width=400');   // may also try $window
} 
 
  function checkLoggedIn(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function() {
        $scope.userData = $ionicUser.details;
            });
        }else{
            $scope.userData = {}; 
        }
    }
  checkLoggedIn();
  
  //$scope.$on('login_change', checkLoggedIn);
    
    //$scope.customdata = $ionicUser.get('user details');

}])
   
.controller('mapsExampleCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: -23.598763,
              longitude: -46.676547
            },
            zoom: 13,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
}])
   
.controller('centralCoastCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('centralCoastHTMLCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('jobSearchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
 