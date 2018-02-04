var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/users', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/users/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/users/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/users/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.when('/plagiarisms', {
		controller:'BooksController',
		templateUrl: 'views/plagiarism_list.html'
	})
	.when('/plagiarisms/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/plagiarism_details.html'
	})
	.when('/plagiarisms/add',{
		controller:'BooksController',
		templateUrl: 'views/add_plagiarism.html'
	})
	.when('/plagiarisms/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_plagiarism.html'
	})
	.when('/reviewers', {
		controller:'BooksController',
		templateUrl: 'views/reviewers_list.html'
	})
	.when('/reviewers/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/reviewer_details.html'
	})
	.when('/reviewers/add',{
		controller:'BooksController',
		templateUrl: 'views/add_reviewer.html'
	})
	.when('/reviewers/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_reviewer.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});