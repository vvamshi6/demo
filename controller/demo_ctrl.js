angular.module('myApp').controller('demo_ctrl',demo);
function demo($scope,$firebaseObject){
  var ref = firebase.database().ref();
// console.log(data11)
var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$loaded().then(function(result){
    // console.log(result.DelhiDareDevils);
    $scope.data=result.DelhiDareDevils;
  });
// putting a console.log here won't work, see below
};
