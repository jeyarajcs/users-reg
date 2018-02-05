var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/users').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+id).success(function(response){
			$scope.book = response;
			$scope.book.date_receive = response.date_receive != null ? new Date(response.date_receive) : new Date();
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/new-user/', $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/users/'+id).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.getPlagiarisms = function(){
		$http.get('/api/plagiarisms').success(function(response){
			$scope.plagiarisms = response;
		});
	}

	$scope.getPlagiarism = function(){
		var id = $routeParams.id;
		$http.get('/api/plagiarisms/'+id).success(function(response){
			$scope.plagiarism = response[0];
			$scope.plagiarism.date_receive = response.date_receive != null ? new Date(response.date_receive) : new Date();
			$scope.plagiarism.date_checked = response.date_checked != null ? new Date(response.date_checked) : new Date();
		});
	}

	$scope.addPlagiarism = function(){
		$http.post('/api/new-plagiarism/', $scope.plagiarism).success(function(response){
			window.location.href='#/plagiarisms';
		});
	}

	$scope.updatePlagiarism = function(){
		var id = $routeParams.id;
		$http.put('/api/plagiarisms/'+id, $scope.plagiarism).success(function(response){
			window.location.href='#/plagiarisms';
		});
	}

	$scope.removePlagiarism = function(id){
		$http.delete('/api/plagiarisms/'+id).success(function(response){
			window.location.href='#/plagiarisms';
		});
	}

	$scope.getReviewers = function(){
		$http.get('/api/reviewers').success(function(response){
			$scope.reviewers = response;
		});
	}

	$scope.getReviewer = function(){
		var id = $routeParams.id;
		$http.get('/api/reviewers/'+id).success(function(response){
			$scope.reviewer = response;
			$scope.reviewer.date_receive = response.date_receive != null ? new Date(response.date_receive) : new Date();
			$scope.reviewer.date_sent = response.date_sent != null ? new Date(response.date_sent) : new Date();
		});
	}

	$scope.addReviewer = function(){
		$http.post('/api/new-reviewer/', $scope.reviewer).success(function(response){
			window.location.href='#/reviewers';
		});
	}

	$scope.updateReviewer = function(){
		var id = $routeParams.id;
		$http.put('/api/reviewers/'+id, $scope.reviewer).success(function(response){
			window.location.href='#/reviewers';
		});
	}

	$scope.removeReviewer = function(id){
		$http.delete('/api/reviewers/'+id).success(function(response){
			window.location.href='#/reviewers';
		});
	}

	$scope.getRegistrations = function(){
		$http.get('/api/registrations').success(function(response){
			$scope.registrations = response;
		});
	}

	$scope.getRegistration = function(){
		var id = $routeParams.id;
		$http.get('/api/registrations/'+id).success(function(response){
			$scope.registration = response;
		});
	}

	$scope.addRegistration = function(){
		$http.post('/api/new-registration/', $scope.registration).success(function(response){
			window.location.href='#/registrations';
		});
	}

	$scope.updateRegistration = function(){
		var id = $routeParams.id;
		$http.put('/api/registrations/'+id, $scope.registration).success(function(response){
			window.location.href='#/registrations';
		});
	}

	$scope.removeRegistration = function(id){
		$http.delete('/api/registrations/'+id).success(function(response){
			window.location.href='#/registrations';
		});
	}
}]);