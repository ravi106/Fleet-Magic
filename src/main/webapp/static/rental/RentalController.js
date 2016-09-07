/**
 * Created by A101-KAVA on 8/25/2016.
 */
angular.module('fleetMagic').controller('RentalController', ['$scope', '$http', '$state', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, ClientConfig, fleetMagicService) {

    $scope.fleetMagic = {};
    $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.paymentMethods = ["CASH", "CHEQUE", "DEBITCARD", "VISA", "MASTER", "AMEX"];
    $scope.expiryMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    $scope.expiryYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
    $scope.rentalSearchCriteria = {};
    var dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    var inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    function toggleMin() {
        this.inlineOptions.minDate = this.inlineOptions.minDate ? null : new Date();
        this.dateOptions.minDate = this.inlineOptions.minDate;
    }

    function open() {
        this.opened = true;
    }

    $scope.dob = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.dob1 = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.dateOut = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.dateIn = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.licenseExpiryDate = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.insuranceExpirationDate = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    $scope.licenseExpiryDate1 = {
        opened: false,
        dateOptions: dateOptions,
        inlineOptions: inlineOptions,
        toggleMin: toggleMin,
        open: open
    };

    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    }

    $scope.initRentalController = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehiclesByBusinessUnit/" + $scope.selectedBusinessUnit.id + "/status/AVAILABLE").success(function (data) {
            $scope.fleetMagic.vehicles = data;
            $scope.accordion = {};
            $scope.carList = [];
            for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
                var car = {};
                car.id = $scope.fleetMagic.vehicles[i].id;
                car.carDetails = $scope.fleetMagic.vehicles[i].make + " " + $scope.fleetMagic.vehicles[i].model + ", " + $scope.fleetMagic.vehicles[i].color + ", {" + $scope.fleetMagic.vehicles[i].registration + "}";
                $scope.carList.push(car);
                if (!$scope.isExistingRental) {
                    $scope.isEditRental = true;
                }
            }
        }).error(function (err) {
            console.log(err);
        });
    };

    $scope.getPersonalDetails = function () {
        if ($scope.fleetMagic.selectedCar != null && $scope.fleetMagic.selectedCar != "Select A Car") {
            $scope.accordion.selectInsurancePanelOpen = !$scope.accordion.selectInsurancePanelOpen;
        } else {
            $scope.accordion.selectCarPanelError = true;
        }
    };

    $scope.showCarDetails = function (item) {
        for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
            if (item.id == $scope.fleetMagic.vehicles[i].id) {
                $scope.rental.vehicle = $scope.fleetMagic.vehicles[i];
            }
        }
        $scope.accordion.selectCarPanelError = false;
        $scope.accordion.showDetails = true;
    };

    $scope.showReplaceCarDetails = function (item) {
        for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
            if (item.id == $scope.fleetMagic.vehicles[i].id) {
                $scope.rental.replacementVehicle = $scope.fleetMagic.vehicles[i];
            }
        }
        $scope.fleetMagic.showReplaceCarDetails = true;
    };

    $scope.payment = {};
    $scope.billing = {};
    $scope.customer = {};
    $scope.rental = {};
    $scope.fleetMagic.pricePerMonth =0;

    var startDate, endDate, oneDay = 24 * 60 * 60 * 1000;
    $scope.checkExtendedPrice = function (extention1Or2) {
        if(extention1Or2 ==1 ) {
            startDate = new Date($scope.rental.endDate).getTime();
            endDate = new Date($scope.rental.extenstion1).getTime();
            $scope.rental.extenstion1Amount = Math.ceil(Math.abs(((endDate - startDate) / oneDay) * $scope.rental.vehicle.perDayRent));
        }else{
            startDate = new Date($scope.rental.extenstion1).getTime();
            endDate = new Date($scope.rental.extenstion2).getTime();
            $scope.rental.extenstion2Amount = Math.ceil(Math.abs(((endDate - startDate) / oneDay) * $scope.rental.vehicle.perDayRent));
        }
    };

    $scope.checkPrice = function () {
        startDate = new Date($scope.rental.startDate).getTime();
        endDate = new Date($scope.rental.endDate).getTime();
        $scope.rental.startDate = startDate;
        $scope.rental.endDate = endDate;
        if ($scope.rental.startDate != null && $scope.rental.endDate != null && $scope.rental.vehicle.perDayRent) {
            $scope.fleetMagic.pricePerMonth = Math.ceil(Math.abs(((endDate - startDate) / oneDay) * $scope.rental.vehicle.perDayRent));
        }
        if ($scope.rental.additionalDriverCharge) {
            $scope.fleetMagic.tax = ($scope.fleetMagic.pricePerMonth + $scope.rental.additionalDriverCharge) * 0.06;
            if(!$scope.rental.price) {
                $scope.rental.price = $scope.fleetMagic.tax + $scope.fleetMagic.pricePerMonth + $scope.rental.additionalDriverCharge;
            }
        } else {
            $scope.fleetMagic.tax = $scope.fleetMagic.pricePerMonth * 0.06;
            if(!$scope.rental.price) {
                $scope.rental.price = $scope.fleetMagic.tax + $scope.fleetMagic.pricePerMonth;
            }
        }
    };

    $scope.additionalDriver = false;
    $scope.rental.payment = {};
    $scope.submitPaymentDetails = function () {
        $scope.rental.customer1.dob = new Date($scope.customer.dob).getTime();
        $scope.rental.customer1.dlExperiryDate = new Date($scope.customer.dlExperiryDate).getTime();
        $scope.rental.insuranceStatus = "ON";
        $scope.rental.insuranceExpirationDate = new Date($scope.rental.insuranceExpirationDate).getTime();
        $scope.rental.rentalPaymentId = 2;
        $scope.rental.businessUnit = $scope.selectedBusinessUnit;
        if ($scope.rental.customer2) {
            $scope.rental.customer2.dob = new Date($scope.customer1.dob).getTime();
            $scope.rental.customer2.dlExperiryDate = new Date($scope.customer1.dlExperiryDate).getTime();
        }
        if($scope.isExtendRental){
            $http.post(ClientConfig.CLIENT_BASE_URL + "extendRental", $scope.rental).success(function (response) {
                $state.go("agreement");
                fleetMagicService.setRentalAgreement(response);
            }).error(function (err) {
                console.log(err);
            })
        }else {
            $http.post(ClientConfig.CLIENT_BASE_URL + "rental", $scope.rental).success(function (response) {
                $state.go("agreement");
                fleetMagicService.setRentalAgreement(response);
            }).error(function (err) {
                console.log(err);
            })
        }
    };

    $scope.searchCriteria = {};
    $scope.searchCriteria1 = {};
    $scope.selectedCustomer = 0;

    $scope.searchAdditionalExistingDriver = function () {
        $scope.error1 = null;
        var url;
        console.log($scope.searchCriteria1);
        if ($scope.searchCriteria1.type == "mobile") {
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/" + $scope.searchCriteria1.mobile;
        } else if ($scope.searchCriteria1.type == "email") {
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/" + $scope.searchCriteria1.email
        } else {
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/" + $scope.searchCriteria1.firstName + "/lastName/" + $scope.searchCriteria1.lastName;
        }
        $http.get(url).success(function (data) {
            if (data.length == 1) {
                $scope.customer1 = data[0];
                $scope.customers1 = [];
            } else {
                $scope.customers1 = data;
                $scope.customer1 = [];
            }
            if (data.length == 0) {
                $scope.error1 = "No Records Found.";
            }
        }).error(function (err) {
            $scope.error1 = "Error While Searching..  Try Again";
            console.log(err);
        });
    };

    $scope.search = function () {
        $scope.error = null;
        var url;
        console.log($scope.searchCriteria);
        if ($scope.searchCriteria.type == "mobile") {
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/" + $scope.searchCriteria.mobile;
        } else if ($scope.searchCriteria.type == "email") {
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/" + $scope.searchCriteria.email
        } else {
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/" + $scope.searchCriteria.firstName + "/lastName/" + $scope.searchCriteria.lastName;
        }
        $http.get(url).success(function (data) {
            if (data.length == 1) {
                $scope.customer = data[0];
                $scope.customers = [];
            } else {
                $scope.customers = data;
                $scope.customer = [];
            }
            if (data.length == 0) {
                $scope.error = "No Records Found.";
            }
        }).error(function (err) {
            $scope.error = "Error While Searching..  Try Again";
            console.log(err);
        });
    };
    $scope.selectedBusinessUnit = {};
    $scope.getBusinessUnits = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "businessUnits").success(function (res) {
            $scope.businessUnits = res;
            $scope.selectedBusinessUnit = $scope.businessUnits[0];
            $scope.initRentalController();
        });
    };

    $scope.searchRentals = function () {
        var url;
        if ($scope.rentalSearchCriteria.type == "mobile") {
            url = ClientConfig.CLIENT_BASE_URL + "rental/mobile/" + $scope.rentalSearchCriteria.mobile;
        } else if ($scope.rentalSearchCriteria.type == "email") {
            url = ClientConfig.CLIENT_BASE_URL + "rental/email/" + $scope.rentalSearchCriteria.email
        } else {
            url = ClientConfig.CLIENT_BASE_URL + "rental/number/" + $scope.rentalSearchCriteria.id;
        }
        $http.get(url).success(function (res) {
            if (res.length > 1) {
                $scope.existingRentals = res;
                $scope.existingRental = [];
            } else {
                $scope.existingRental = res[0];
                $scope.existingRentals = [];
            }
            $scope.selectRental(res[0]);
            $scope.selectedRental = res[0].id;
        });
        $scope.fleetMagic.rentalType = "edit";
        $scope.selectRentalType();

    };

    $scope.selectRental = function (rental) {
        $scope.accordion.showDetails = true;
        $scope.rental = rental;
        $scope.isExistingcustomer = true;
        if (rental.customer2) {
            $scope.additionalDriver = true;
        } else {
            $scope.additionalDriver = false;
        }
        $scope.checkPrice();
    };

    $scope.selectRentalType = function () {
        if ($scope.fleetMagic.rentalType == 'edit') {
            $scope.isCloseRental = false;
            $scope.isExtendRental = false;
            $scope.isEditRental = true;
            $scope.isReplaceVehicleRental = false;
        } else if ($scope.fleetMagic.rentalType == 'extend') {
            $scope.isCloseRental = false;
            $scope.isExtendRental = true;
            $scope.isEditRental = false;
            $scope.isReplaceVehicleRental = false;
        } else if ($scope.fleetMagic.rentalType == 'close') {
            $scope.isCloseRental = true;
            $scope.isExtendRental = false;
            $scope.isEditRental = false;
            $scope.isReplaceVehicleRental = false;
        } else {
            $scope.isCloseRental = false;
            $scope.isExtendRental = false;
            $scope.isEditRental = false;
            $scope.isReplaceVehicleRental = true;
        }
    };

    $scope.closeRental = function () {
        if (confirm("Do you really want to close?")) {
            $http.post(ClientConfig.CLIENT_BASE_URL + "closeRental", $scope.rental).success(function (response) {
                $state.go("agreement");
                fleetMagicService.setRentalAgreement(response);
            }).error(function (err) {
                console.log(err);
            })
        }
    };

    $scope.replaceVehicle = function () {
        $http.post(ClientConfig.CLIENT_BASE_URL + "replaceVehicle", $scope.rental).success(function (response) {
            $state.go("agreement");
            fleetMagicService.setRentalAgreement(response);
        }).error(function (err) {
            console.log(err);
        })
    };

    $scope.destroyDetails = function () {
        $scope.accordion.selectedCarFullDetails = {};
        $scope.accordion.showDetails = false;
        $scope.rental = {};
        $scope.isExistingcustomer = false;
        $scope.customer = {};
        $scope.customer1 = {};
        $scope.payment = {};
        $scope.existingRental=null;
        $scope.existingRentals=[];
        $scope.isExtendRental = false;
        $scope.isCloseRental = false;
        $scope.isReplaceVehicleRental=false;
        $scope.isEditRental=true;
        $scope.fleetMagic.pricePerMonth=0;
        $scope.fleetMagic.tax=0;
    }
}]);