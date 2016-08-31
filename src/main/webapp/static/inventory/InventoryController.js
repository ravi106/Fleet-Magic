/**
 * Created by A101-KAVA on 8/30/2016.
 */

angular.module('fleetMagic').controller('InventoryController', ['$scope', '$http', '$state', 'ClientConfig', function ($scope, $http, $state, ClientConfig) {

    $scope.inventory = {};
    $scope.inventory.selectedCar = "Select A Car";
    $scope.initInventoryController = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehicles").success(function (data) {
            $scope.inventory.vehicles = data;
            $scope.carList = [];
            for (var i = 0; i < $scope.inventory.vehicles.length; i++) {
                var car = {};
                car.id = $scope.inventory.vehicles[i].id;
                car.carDetails = $scope.inventory.vehicles[i].make + " " + $scope.inventory.vehicles[i].model + ", " + $scope.inventory.vehicles[i].color;
                $scope.carList.push(car);
            }
            $scope.inventory.selectedCar = $scope.carList[0];
        }).error(function (err) {
            console.log(err);
        });
    };

    $scope.showCarDetails = function (car) {
        for (var i = 0; i < $scope.inventory.vehicles.length; i++) {
            if (car.id == $scope.inventory.vehicles[i].id) {
                $scope.accordion.selectedCarFullDetails = $scope.inventory.vehicles[i];
            }
        }
        $scope.accordion.showDetails = true;
    };
}]);