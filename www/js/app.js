// Ionic Starter App
var base_url = "http://localhost:3000";
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.subjects', {
    url: '/subjects',
    cache: false,
    views: {
      'tab-subjects': {
        templateUrl: 'templates/tab-subjects.html',
        controller: 'SubjectsCtrl'
      }
    }
  })
    .state('tab.subject-detail', {
      url: '/subjects/:subjectId',
      cache: false,
      views: {
        'tab-subjects': {
          templateUrl: 'templates/subject-detail.html',
          controller: 'SubjectCtrl'
        }
      }
    })
  .state('tab.students', {
      url: '/students',
    cache: false,
      views: {
        'tab-students': {
          templateUrl: 'templates/tab-students.html',
          controller: 'StudentsCtrl'
        }
      }
    })
    .state('tab.student-detail', {
      url: '/students/:studentId',
      cache: false,
      views: {
        'tab-students': {
          templateUrl: 'templates/student-detail.html',
          controller: 'StudentCtrl'
        }
      }
    })
    .state('tab.add', {
      url: '/add',
      cache: false,
      views: {
        'tab-add': {
          templateUrl: 'templates/tab-add.html',
          controller: 'AddCtrl'
        }
      }
    })
    .state('tab.searchstudent', {
      url: '/searchstudent',
      cache: false,
      views: {
        'tab-searchstudent': {
          templateUrl: 'templates/tab-search-student.html',
          controller: 'SearchStudentCtrl'
        }
      }
    })
  .state('tab.search', {
    url: '/search',
    cache: false,
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/subjects');

});
