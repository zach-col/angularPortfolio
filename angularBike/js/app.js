var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/about", {
        templateUrl : "about.html",
        controller: "AboutController"
    })
    .when("/pricing", {
        templateUrl : "pricing.html",
    })
});