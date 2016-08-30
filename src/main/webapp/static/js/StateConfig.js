angular.module('fleetMagic').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.html5Mode = true;
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
    }).state('inventory', {
        url: '/inventory',
        templateUrl: 'partials/inventory.html'
    }).state('rental', {
        url: '/rental',
        templateUrl: 'rental/rental.html',
        controller: 'RentalController'
    }).state('report', {
        url: '/report',
        templateUrl: 'partials/report.html'
    }).state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
    }).state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
    }).state('agreement', {
        url: '/agreement',
        templateUrl: 'partials/agreement.html',
        controller:'AgreementController'
    });

}]);
