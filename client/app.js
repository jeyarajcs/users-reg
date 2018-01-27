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
	.otherwise({
		redirectTo: '/'
	});
});