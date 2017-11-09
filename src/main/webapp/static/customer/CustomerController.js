angular.module('fleetMagic').controller('CustomerController', ['$scope', '$http', '$state', 'ClientConfig', function ($scope, $http, $state, ClientConfig) {
    $scope.searchCriteria = {};
    $scope.searchCriteria.type = "mobile";
    $scope.customers = {};
    $scope.format = 'MM/dd/yyyy';
    $scope.error = null;
    $scope.search = function () {
        $scope.error = null;
        var url = null;
        if ($scope.searchCriteria.type == "mobile") {
            if (!$scope.searchCriteria.mobile) {
                alert("Please enter mobile/home phone number.");
                return;
            }
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/" + $scope.searchCriteria.mobile;
        } else if ($scope.searchCriteria.type == "email") {
            if (!$scope.searchCriteria.email) {
                alert("Please enter email.");
                return;
            }
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/" + $scope.searchCriteria.email;
        } else {
            if (!$scope.searchCriteria.firstName && !$scope.searchCriteria.lastName) {
                alert("Please enter first or last name.");
                return;
            }
            var firstName = $scope.searchCriteria.firstName ? $scope.searchCriteria.firstName : "-";
            var lastName = $scope.searchCriteria.lastName ? $scope.searchCriteria.lastName : "-";
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/" + firstName + "/lastName/" + lastName;
        }
        $http.get(url).success(function (data) {
            $scope.customers = data;
            if ($scope.customers.length == 0) {
                $scope.customers = {};
                $scope.error = "No Records Found.";
            }
        }).error(function (err) {
            $scope.error = "Error While Searching..  Try Again";
            console.log(err);
        });
    };
    $scope.selectCustomer = function (customer) {
        $scope.customer = customer;
    };
    $scope.updateCustomer = function () {
        $http.post(ClientConfig.CLIENT_BASE_URL + "customer", convertDates($scope.customer)).success(function (data) {
            console.log(data);
            alert("Successfully Updated Customer Details")
        }).error(function (err) {
            console.log(err);
        });
    };
    function convertDates(customer) {
        customer.dob = new Date(customer.dob).getTime();
        customer.dlExperiryDate = new Date(customer.dlExperiryDate).getTime();
        console.log(customer);
        return customer;
    }

    $scope.licenseExpiryDate = {
        opened: false,
        open: open,
        minDate: new Date()
    };

    $scope.dob = {
        opened: false,
        open: open
    };

    function open() {
        this.opened = true;
    }
}]);