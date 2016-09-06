/**
 * Created by A101-KAVA on 9/7/2016.
 */

angular.module('fleetMagic').controller('RentalReportController', ['$scope', '$http', '$state', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, ClientConfig, fleetMagicService) {

    $scope.rentalReport = {};

    $scope.getRentalReport = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "").success(function (response) {
            $scope.rentalReport = response;
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
