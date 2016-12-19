/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('StudentCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
  $scope.Phone = {};
  var StudentID = window.location.href.split("/").pop();

  // when landing on the page, get all subjects
  $http.get(base_url+'/students/' + StudentID)
    .success(function(data) {
      $scope.student = data;
      $scope.phones = data.phones;
      $scope.subjects = data.subjects;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });


  $scope.AddPhone = function () {
    console.log("AddPhone");
    console.log($scope.Phone);
    $http.post('/students/addphone/' + StudentID, $scope.Phone)
      .success(function(data){
        $scope.Phone ={};
        $scope.student = data;
        $scope.phones = data.phones;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };
  $scope.RemovePhone = function (phone) {
    console.log("remove phone!!!!");
    $http.delete('/students/deletephone/' + StudentID +'/' + phone)
      .success(function(data){
        console.log("remove phone!!!!");
        $scope.student = data;
        $scope.phones = data.phones;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };


});
