/**
 * Created by A101-KAVA on 9/7/2016.
 */

angular.module('fleetMagic').controller('RentalReportController', ['$scope', '$http', '$state', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, ClientConfig, fleetMagicService) {

    $scope.rentalReport = {};
    $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

    $scope.getAllVehicles = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehicles").success(function (response) {
            $scope.rentalReport.vehicles = response;
        });
    };

    $scope.getRentalReport = function () {
        $scope.getAllVehicles();
        $scope.rentalReport.startDate = new Date($scope.rentalReport.startDate).getTime();
        $scope.rentalReport.endDate = new Date($scope.rentalReport.endDate).getTime();
        $http.get(ClientConfig.CLIENT_BASE_URL + "rentalsBetweenDates?startDate=" + $scope.rentalReport.startDate + "&endDate=" +$scope.rentalReport.endDate).success(function (response) {
            $scope.rentalReport.data = response;
        });
    };

    $scope.dateOut = {
        opened: false,
        open: open
    };

    $scope.dateIn = {
        opened: false,
        open: open
    };

    function open() {
        this.opened = true;
    }
}]);
