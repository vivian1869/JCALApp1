angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.jobCentreAustralia'
      2) Using $state.go programatically:
        $state.go('tabsController.jobCentreAustralia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/home
      /page1/tab10/home
  */
  .state('tabsController.jobCentreAustralia', {
    url: '/home',
    views: {
      'tab9': {
        templateUrl: 'templates/jobCentreAustralia.html',
        controller: 'jobCentreAustraliaCtrl'
      },
      'tab10': {
        templateUrl: 'templates/jobCentreAustralia.html',
        controller: 'jobCentreAustraliaCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/contact',
    views: {
      'tab10': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController.messageUs', {
    url: '/messageus',
    views: {
      'tab10': {
        templateUrl: 'templates/messageUs.html',
        controller: 'messageUsCtrl'
      }
    }
  })

  .state('services', {
    url: '/services',
    templateUrl: 'templates/services.html',
    controller: 'servicesCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('jobs', {
    url: '/jobs',
    templateUrl: 'templates/jobs.html',
    controller: 'jobsCtrl'
  })

  .state('tabsController.findUs', {
    url: '/find us',
    views: {
      'tab10': {
        templateUrl: 'templates/findUs.html',
        controller: 'findUsCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab10': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/signup',
    views: {
      'tab10': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('tabsController.updateProfile', {
    url: '/Update Profile',
    views: {
      'tab10': {
        templateUrl: 'templates/updateProfile.html',
        controller: 'updateProfileCtrl'
      }
    }
  })

  .state('tabsController.userHome', {
    url: '/page11',
    views: {
      'tab10': {
        templateUrl: 'templates/userHome.html',
        controller: 'userHomeCtrl'
      }
    }
  })

  .state('tabsController.jobCentreAustralia2', {
    url: '/page17',
    views: {
      'tab10': {
        templateUrl: 'templates/jobCentreAustralia2.html',
        controller: 'jobCentreAustralia2Ctrl'
      }
    }
  })

  .state('mapsExample', {
    url: '/page13',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('centralCoast', {
    url: '/CCoast',
    templateUrl: 'templates/centralCoast.html',
    controller: 'centralCoastCtrl'
  })

  .state('centralCoastHTML', {
    url: '/page18',
    templateUrl: 'templates/centralCoastHTML.html',
    controller: 'centralCoastHTMLCtrl'
  })

  .state('tabsController.jobSearch', {
    url: '/page9',
    views: {
      'tab10': {
        templateUrl: 'templates/jobSearch.html',
        controller: 'jobSearchCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page17')


});