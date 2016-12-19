/**
 * Created by Marta_ on 18/12/2016.
 */

app.controller('AddCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
  console.log('AddCtrl');
  $scope.newstudent = {};
  $scope.NewSubject = {};
  //CREATE subject
  $scope.CreateSubject = function () {
    $http.post(base_url+'/subjects', $scope.NewSubject)
      .success(function(data){
        $scope.NewSubject = {}; //clear the form
        $scope.subjects = data;
        $scope.SubjectError = {};
      })
      .error(function(data){
        console.log('Error:' + data);
        $scope.SubjectError = true;
      });

  };

  //CREATE student
  $scope.CreateStudent = function () {
    console.log("Create Student")
    console.log($scope.newstudent);
    $http.post(base_url+'/students', $scope.newstudent)
      .success(function(data){
        $scope.newstudent = {}; //clear the form
        $scope.students = data;
        console.log(data);
        console.log("createstudent");
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

});
