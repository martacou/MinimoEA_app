/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('SubjectCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
  var SubjectID = window.location.href.split("/").pop();
  console.log("Subject profile")
  // when landing on the page get subject
  $http.get(base_url+'/subjects/'+ SubjectID)
    .success(function(data) {
      console.log("Subject profile succes");
      $scope.subject = data;
      $scope.subjectstudents = data.students;
      console.log($scope.subjectstudents);
      console.log(data);
    })
    .error(function(data) {
      console.log("Subject profile error")
      console.log('Error: ' + data);
    });

  // when landing on the page, get all students
  $http.get(base_url+'/students')
    .success(function(data) {
      $scope.students = data;
      $scope.add;

    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.AddStudentInSubject = function (id) {
    $scope.addstudent = {
      student_id: id
    };
    $scope.ID = id;
    console.log($scope.addstudent);
    $http.put(base_url+'/subjects/' + SubjectID, $scope.addstudent)
      .success(function(data){
        $scope.subject = data;
        $scope.subjectstudents= data.students;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

  $scope.DeleteStudentSubject = function (id) {
    $http.delete(base_url+'/subjects/' + SubjectID +'/'+ id)
      .success(function(data){
        $scope.subject = data;
        $scope.subjectstudents= data.students;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };


});
