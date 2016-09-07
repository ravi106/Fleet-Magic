angular.module('fleetMagic').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.html5Mode = true;
    $urlRouterProvider.otherwise('/rental');

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
    }).state('rentalReport', {
        url: '/rentalReport',
        templateUrl: 'rentalReport/rentalReport.html',
        controller:'RentalReportController'
    }).state('agreement', {
        url: '/agreement',
        templateUrl: 'agreement/agreement.html',
        controller: 'AgreementController'
    });

}]);
