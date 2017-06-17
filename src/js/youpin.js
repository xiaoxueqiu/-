var app = angular.module('myapp', ['ngRoute','angularCSS'])
app.controller('mycity', ['$scope','$http',function($scope,$http){
	$http.get('data/6.json').then(function(res){
		$scope.arr1 = res.data.product;
	});



}]);	