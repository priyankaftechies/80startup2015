var startup = angular.module('startup', ['ui.router']);

startup.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'www/templates/home.html'

        })

        .state('add', {
            url: '/add',
            templateUrl: 'www/templates/add_startup.html'
        })

        .state('details', {
            url: '/details',
            templateUrl: 'www/templates/details.html'
        })
});
