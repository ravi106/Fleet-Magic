angular.module('fleetMagic').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.html5Mode = true;
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
    }).state('inventory', {
        url: '/inventory',
        templateUrl: 'inventory/inventory.html',
        controller: 'InventoryController'
    }).state('customer', {
        url: '/customer',
        templateUrl: 'customer/customer.html',
        controller: 'CustomerController'
    }).state('rental', {
        url: '/rental',
        templateUrl: 'rental/rental.html',
        controller: 'RentalController'
    }).state('report', {
        url: '/report',
        templateUrl: 'partials/report.html'
    }).state('agreement', {
        url: '/agreement',
        templateUrl: 'partials/agreement.html',
        controller: 'AgreementController'
    });

}]);
