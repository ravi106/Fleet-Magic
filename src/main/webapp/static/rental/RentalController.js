/**
 * Created by A101-KAVA on 8/25/2016.
 */
angular.module('fleetMagic').controller('RentalController', ['$scope', '$http', '$state', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, ClientConfig, fleetMagicService) {

    $scope.fleetMagic = {};
    $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.priceDetails = {};
    $scope.priceDetails.perDay = 25;
    $scope.insuranceDetails = {};
    $scope.rentalSearchCriteria = {};
    $scope.dob = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.dob.inlineOptions.minDate = $scope.dob.inlineOptions.minDate ? null : new Date();
            $scope.dob.dateOptions.minDate = $scope.dob.inlineOptions.minDate;
        },
        open: function () {
            $scope.dob.opened = true;
        }
    };
    $scope.dob.toggleMin();

    $scope.dob1 = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.dob1.inlineOptions.minDate = $scope.dob1.inlineOptions.minDate ? null : new Date();
            $scope.dob1.dateOptions.minDate = $scope.dob1.inlineOptions.minDate;
        },
        open: function () {
            $scope.dob1.opened = true;
        }
    };
    $scope.dob1.toggleMin();

    $scope.dateOut = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.dateOut.inlineOptions.minDate = $scope.dateOut.inlineOptions.minDate ? null : new Date();
            $scope.dateOut.dateOptions.minDate = $scope.dateOut.inlineOptions.minDate;
        },
        open: function () {
            $scope.dateOut.opened = true;
        }
    };
    $scope.dateOut.toggleMin();

    $scope.dateIn = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.dateIn.inlineOptions.minDate = $scope.dateIn.inlineOptions.minDate ? null : new Date();
            $scope.dateIn.dateOptions.minDate = $scope.dateIn.inlineOptions.minDate;
        },
        open: function () {
            $scope.dateIn.opened = true;
        }
    };
    $scope.dateIn.toggleMin();

    $scope.licenseExpiryDate = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.licenseExpiryDate.inlineOptions.minDate = $scope.licenseExpiryDate.inlineOptions.minDate ? null : new Date();
            $scope.licenseExpiryDate.dateOptions.minDate = $scope.licenseExpiryDate.inlineOptions.minDate;
        },
        open: function () {
            $scope.licenseExpiryDate.opened = true;
        }
    };
    $scope.licenseExpiryDate.toggleMin();

    $scope.licenseExpiryDate1 = {
        opened: false,
        dateOptions: {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }, inlineOptions: {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }, toggleMin: function () {
            $scope.licenseExpiryDate1.inlineOptions.minDate = $scope.licenseExpiryDate1.inlineOptions.minDate ? null : new Date();
            $scope.licenseExpiryDate1.dateOptions.minDate = $scope.licenseExpiryDate1.inlineOptions.minDate;
        },
        open: function () {
            $scope.licenseExpiryDate1.opened = true;
        }
    };
    $scope.licenseExpiryDate1.toggleMin();

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
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehiclesByStatus/AVAILABLE").success(function (data) {
            $scope.fleetMagic.vehicles = data;
            $scope.accordion = {};
            $scope.carList = [];
            for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
                var car = {};
                car.id = $scope.fleetMagic.vehicles[i].id;
                car.carDetails = $scope.fleetMagic.vehicles[i].make + " " + $scope.fleetMagic.vehicles[i].model + ", " + $scope.fleetMagic.vehicles[i].color;
                $scope.carList.push(car);
            }
        }).error(function (err) {
            console.log(err);
        });
    };

    $scope.getPersonalDetails = function () {
        if ($scope.fleetMagic.selectedCar != null && $scope.fleetMagic.selectedCar != "Select A Car") {
            $scope.accordion.selectCarPanelOpen = !$scope.accordion.selectCarPanelOpen;
            $scope.accordion.personalDetailsPanelOpen = !$scope.accordion.personalDetailsPanelOpen;
        } else {
            $scope.accordion.selectCarPanelError = true;
        }
    };

    $scope.showCarDetails = function (item) {
        for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
            if (item.id == $scope.fleetMagic.vehicles[i].id) {
                $scope.accordion.selectedCarFullDetails = $scope.fleetMagic.vehicles[i];
            }
        }
        $scope.accordion.selectCarPanelError = false;
        $scope.accordion.showDetails = true;
    };

    $scope.payment = {};
    $scope.billing = {};
    $scope.customer = {};
    $scope.rental = {};
    var startDate, endDate, oneDay;
    $scope.checkPrice = function () {
        startDate = new Date($scope.rental.startDate);
        endDate = new Date($scope.rental.endDate);
        oneDay = 24 * 60 * 60 * 1000;
        $scope.rental.startDate = startDate.getTime();
        $scope.rental.endDate = endDate.getTime();
        if ($scope.rental.startDate != null && $scope.rental.endDate != null && $scope.accordion.selectedCarFullDetails.perDayRent) {
            $scope.rental.price = Math.ceil(((endDate - startDate) / oneDay) * $scope.accordion.selectedCarFullDetails.perDayRent);
        }
    };

    $scope.submitPaymentDetails = function () {
        $scope.rental.payment = {};

        $scope.rental.payment.cardInfo = $scope.payment.cardInfo;

        $scope.rental.payment.cardInfo.id = 4;
        $scope.rental.vehicle = $scope.accordion.selectedCarFullDetails;

        $scope.rental.customer1 = $scope.customer;
        $scope.rental.customer1.dob = new Date($scope.customer.dob).getTime();
        $scope.rental.customer1.dlExperiryDate = new Date($scope.customer.dlExperiryDate).getTime();

        $scope.rental.insuranceStatus = "ON";
        $scope.rental.rentalPaymentId = 2;
        if ($scope.customer1) {
            $scope.rental.customer2 = $scope.customer1;
            $scope.rental.customer2.dob = new Date($scope.customer1.dob).getTime();
            $scope.rental.customer2.dlExperiryDate = new Date($scope.customer1.dlExperiryDate).getTime();
        }
        $http.post(ClientConfig.CLIENT_BASE_URL + "rental", $scope.rental).success(function (response) {
            $state.go("agreement");
            fleetMagicService.setRentalAgreement(response);
        }).error(function (err) {
            console.log(err);
        })
    };

    $scope.searchCriteria = {};
    $scope.searchCriteria1 = {};
    $scope.selectedCustomer = 0;

    $scope.selectCustomer = function (customer) {
        $scope.customer = customer;
    };

    $scope.selectCustomer1 = function (customer) {
        $scope.customer1 = customer;
    };

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
        });
    }

    $scope.selectRental = function (rental) {
        $scope.accordion.selectedCarFullDetails = rental.vehicle;
        $scope.accordion.showDetails = true;
        $scope.rental = rental;
        $scope.isExistingcustomer = true;
        $scope.customer = rental.customer1;
        $scope.customer1 = rental.customer2;
        $scope.payment = rental.payment;
    }
}]);