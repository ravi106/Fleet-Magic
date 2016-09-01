/**
 * Created by A101-KAVA on 8/25/2016.
 */
angular.module('fleetMagic').controller('RentalController', ['$scope', '$http', '$state', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, ClientConfig, fleetMagicService) {

    $scope.fleetMagic = {};
    $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.priceDetails={};
    $scope.insuranceDetails={};
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
    $scope.submitPaymentDetails = function () {
        $scope.rental.payment = {};
        $scope.rental.payment.payStatus = "Approved";
        $scope.rental.payment.description = "Paid";
        $scope.rental.payment.payDate = 1443119400000;
        $scope.rental.payment.amount = 76;
        $scope.rental.payment.rentalPaymentId = 7;
        $scope.rental.payment.paymentMethod = "DEBITCARD";
        $scope.rental.payment.paidFor = null;
        $scope.rental.payment.chequeNumber = null;
        $scope.rental.payment.chequeIssuedBy = null;
        $scope.rental.payment.cardInfo = {};
        console.log($scope.payment);

        $scope.rental.payment.cardInfo=$scope.payment.cardInfo;

        $scope.rental.payment.cardInfo.id=4;
        $scope.rental.payment.cardInfo.type = "Debit";
        $scope.rental.payment.cardInfo.number = "4356234589012341";
        $scope.rental.payment.cardInfo.expMonth = 6;
        $scope.rental.payment.cardInfo.expYear = 2019;
        $scope.rental.payment.cardInfo.cvv = 834;
        $scope.rental.payment.cardInfo.customer = null;
        $scope.rental.payment.cardInfo.priority = null;
        $scope.rental.payment.cardInfo.name = "Ravi";
console.log($scope.payment);
        $scope.rental.vehicle = $scope.accordion.selectedCarFullDetails;

        $scope.rental.startDate = 1441218600000;
        $scope.rental.endDate = 1443810600000;
        $scope.rental.price = 100;

        $scope.rental.customer1 = $scope.customer;
        $scope.rental.customer1.dob = new Date($scope.customer.dob).getTime();
        $scope.rental.customer1.dlExperiryDate = 1441218600000;
        $scope.rental.customer1.dlExperiryDate = new Date($scope.customer.dlExperiryDate).getTime();

        $scope.rental.insuranceStatus = "ON";
        $scope.rental.rentalPaymentId = 2;
        $scope.rental.customer2 = $scope.customer2;
        $http.post(ClientConfig.CLIENT_BASE_URL + "rental", $scope.rental).success(function (response) {
            $state.go("agreement");
            fleetMagicService.setRentalAgreement(response);
        }).error(function (err) {
            console.log(err);
        })
    };

    $scope.searchCriteria = {};
    $scope.selectedCustomer = 0;

    $scope.selectCustomer = function (customer) {
      console.log(customer);
        $scope.customer=customer;
    };
    $scope.search = function (){
        $scope.error=null;
        var url;
        console.log($scope.searchCriteria);
        if($scope.searchCriteria.type=="mobile"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/"+$scope.searchCriteria.mobile;
        }else if($scope.searchCriteria.type=="email"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/"+$scope.searchCriteria.email
        }else{
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/"+$scope.searchCriteria.firstName+"/lastName/"+$scope.searchCriteria.lastName;
        }
        $http.get(url).success(function (data) {
            if(data.length ==1){
                $scope.customer = data[0];
            }else{
                $scope.customers = data;
            }
            if (data.length == 0){
                $scope.error="No Records Found.";
            }
        }).error(function (err) {
            $scope.error="Error While Searching..  Try Again";
            console.log(err);
        });
    } ;

}]);