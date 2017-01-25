/**
 * Created by A101-KAVA on 8/30/2016.
 */

angular.module('fleetMagic').controller('InventoryController', ['$scope', '$http', '$state', 'ClientConfig', function ($scope, $http, $state, ClientConfig) {

    $scope.inventory = {};
    $scope.vehicleTypes=["SEDAN", "COUPE", "HATCHBACK", "CONVERTABLE", "VAN", "SUV"];
    $scope.vehicleTitles=["CLEAN", "SALVAGE"];
    $scope.vehicleCategories=["COMPACT", "MIDSIZE", "SUV", "FULLSIZE", "SEDAN"];
    $scope.vehicleStatuses = ["AVAILABLE", "NOT_AVAILABLE", "RENTED", "MAINTENANCE"];
    $scope.insuranceModes=["ON", "OFF"];
    $scope.driveModes=["AUTO", "MANUAL"];
    $scope.initInventoryController = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehiclesByBusinessUnit/" + $scope.selectedBusinessUnit.id).success(function (data) {
            $scope.inventory.vehicles = data;
            $scope.carList = [];
            for (var i = 0; i < $scope.inventory.vehicles.length; i++) {
                var car = {};
                car.id = $scope.inventory.vehicles[i].id;
                car.carDetails = $scope.inventory.vehicles[i].make + " " + $scope.inventory.vehicles[i].model + ", " + $scope.inventory.vehicles[i].color+ ", {" + $scope.inventory.vehicles[i].registration + "}";
                $scope.carList.push(car);
            }
        }).error(function (err) {
            console.log(err);
        });
    };

    $scope.showCarDetails = function (car) {
        for (var i = 0; i < $scope.inventory.vehicles.length; i++) {
            if (car.id == $scope.inventory.vehicles[i].id) {
                $scope.inventory.vehicle = $scope.inventory.vehicles[i];
            }
        }
        $scope.inventory.showDetails = true;
    };

    $scope.addOrUpdateVehicle = function () {
        $http.post(ClientConfig.CLIENT_BASE_URL + "vehicle", convertDates($scope.inventory.vehicle)).success(function (res) {
            console.log(res);
            alert("Successfully loaded");
            $scope.initInventoryController();
        });
    };

    $scope.selectedBusinessUnit = {};
    $scope.getBusinessUnits = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "businessUnits").success(function (res) {
            $scope.businessUnits = res;
            $scope.selectedBusinessUnit = $scope.businessUnits[0];
            $scope.initInventoryController();
        });
    };

    function convertDates(vehicle) {
        vehicle.nextInspectionDate = new Date(vehicle.nextInspectionDate).getTime();
        vehicle.roadTaxExpiryDate = new Date(vehicle.roadTaxExpiryDate).getTime();
        vehicle.insuranceExpiryDate = new Date(vehicle.insuranceExpiryDate).getTime();
        vehicle.purchaseDate = new Date(vehicle.purchaseDate).getTime();
        vehicle.lastServiceDate = new Date(vehicle.lastServiceDate).getTime();
        vehicle.dispenseDate = new Date(vehicle.dispenseDate).getTime();
        return vehicle;
    }

    $scope.lastServiceDate = {
        opened: false,
        open: open
    };
    $scope.dispenseDate = {
        opened: false,
        open: open
    };

    $scope.nextInspectionDate = {
        opened: false,
        open: open
    };
    $scope.roadTaxExpiryDate = {
        opened: false,
        open: open
    };

    $scope.insuranceExpiryDate = {
        opened: false,
        open: open
    };
    $scope.purchaseDate = {
        opened: false,
        open: open
    };
    function open() {
        this.opened = true;
    }
}]);