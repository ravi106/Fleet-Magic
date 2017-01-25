angular.module('fleetMagic').controller('CustomerController', ['$scope', '$http', '$state', 'ClientConfig', function ($scope, $http, $state, ClientConfig) {
	$scope.searchCriteria={};
	$scope.searchCriteria.type = "mobile";
    $scope.customers ={}
    $scope.error=null;
    $scope.search = function (){
        $scope.error=null;
        var url =null;
        if($scope.searchCriteria.type=="mobile"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/"+$scope.searchCriteria.mobile;
        }else if($scope.searchCriteria.type=="email"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/"+$scope.searchCriteria.email;
        }else{
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/"+$scope.searchCriteria.firstName+"/lastName/"+$scope.searchCriteria.lastName;
        }
        $http.get(url).success(function (data) {
            $scope.customers = data;
            if ($scope.customers.length == 0){
                $scope.error="No Records Found.";
            }
        }).error(function (err) {
            $scope.error="Error While Searching..  Try Again";
            console.log(err);
        });
    } ;
    $scope.selectCustomer = function (customer) {
        $scope.customer = customer;
    };
    $scope.updateCustomer = function(){
    	$http.post(ClientConfig.CLIENT_BASE_URL + "customer",convertDates($scope.customer)).success(function (data) {
    	    console.log(data);
            alert("Successfully Updated Customer Details")
        }).error(function(err){
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
        open: open
    };

    function open() {
        this.opened = true;
    }
}]);