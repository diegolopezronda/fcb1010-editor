angular.module('fcb1010EditorApp').controller("AppController", function ($rootScope,$scope) {
    $scope.links = [
        {id:0, label:"Viewer", href:"viewer"},
        {id:1, label:"Editor", href:"editor"}
    ];
    $scope.active_link = $scope.links[0];
    $scope.linkTo = function(index){
        $scope.active_link = $scope.links[index];
    }
    window.onload = function() {
  // Your code here
  console.log('All resources loaded');
};
});