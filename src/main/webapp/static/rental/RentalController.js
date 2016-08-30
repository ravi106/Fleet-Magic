/**
 * Created by A101-KAVA on 8/25/2016.
 */
angular.module('fleetMagic').controller('RentalController', ['$scope', '$http', '$state', 'acuteSelectService', 'ClientConfig', 'fleetMagicService', function ($scope, $http, $state, acuteSelectService, ClientConfig, fleetMagicService) {

    $scope.fleetMagic = {};
    $scope.initRentalController = function () {
        $http.get(ClientConfig.CLIENT_BASE_URL + "vehiclesByStatus/AVAILABLE").success(function (data) {
            $scope.fleetMagic.vehicles = data;
            $scope.accordion = {};
            $scope.accordion.selectedCar = "Select A Car";
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

     var mockData = function () {
        //Temp for request payload
        $http.get("mockData.json").success(function (res) {
            console.log(res + "mock");
            $scope.rental = res;
        });
    };

    $scope.getPersonalDetails = function () {
        if ($scope.accordion.selectedCar != null && $scope.accordion.selectedCar != "Select A Car") {
            $scope.accordion.selectCarPanelOpen = !$scope.accordion.selectCarPanelOpen;
            $scope.accordion.personalDetailsPanelOpen = !$scope.accordion.personalDetailsPanelOpen;
        } else {
            $scope.accordion.selectCarPanelError = true;
        }
    };

    $scope.showCarDetails = function (car) {
        for (var i = 0; i < $scope.fleetMagic.vehicles.length; i++) {
            if (car.id == $scope.fleetMagic.vehicles[i].id) {
                $scope.accordion.selectedCarFullDetails = $scope.fleetMagic.vehicles[i];
            }
        }
        $scope.accordion.selectCarPanelError = false;
        $scope.accordion.showDetails = true;
    };

    $scope.payment = {};
    $scope.billing = {};
    $scope.customer = {};
    $scope.submitPaymentDetails = function () {
        mockData();

        // $scope.rental.payment = {};
        // $scope.rental.payment.payStatus= "Approved";
        // $scope.rental.payment.description="Paid";
        // $scope.rental.payment.payDate=1443119400000;
        // $scope.rental.payment.amount=76;
        // $scope.rental.payment.rentalPaymentId=7;
        // $scope.rental.payment.paymentMethod="Debit Card";
        // $scope.rental.payment.paidFor=null;
        // $scope.rental.payment.chequeNumber=null;
        // $scope.rental.payment.chequeIssuedBy=null;
        // $scope.rental.payment.cardInfo={};
        // $scope.rental.payment.cardInfo.type="Debit";
        // $scope.rental.payment.cardInfo.number="4356234589012341";
        // $scope.rental.payment.cardInfo.expMonth=6;
        // $scope.rental.payment.cardInfo.expYear=2019;
        // $scope.rental.payment.cardInfo.cvv=834;
        // $scope.rental.payment.cardInfo.customer=null;
        // $scope.rental.payment.cardInfo.priority=null;
        // $scope.rental.payment.cardInfo.name="Ravi";
        //
        // $scope.rental.vehicle = $scope.accordion.selectedCarFullDetails;
        // $scope.rental.startDate = 1441218600000;
        // $scope.rental.endDate = 1443810600000;
        // $scope.rental.price = 100;
        // $scope.rental.customer1 = $scope.customer;
        // $scope.rental.customer1.dob=336767400000;
        // $scope.rental.customer1.dlExperiryDate=1441218600000;
        // $scope.rental.insuranceStatus="ON";
        // $scope.rental.rentalPaymentId=2;
        // $scope.rental.customer2 = $scope.customer2;

        $http.post(ClientConfig.CLIENT_BASE_URL + "rental", $scope.rental).success(function (response) {
            $state.go("agreement");
            fleetMagicService.setRentalAgreement(response);
        }).error(function (err) {
            console.log(err);
        })
    };

    $scope.printDiv = function () {
        var printContents = document.getElementById("rentalAgreement").innerHTML;
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" href="css/fleetMagic.css"></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    };

    $scope.saveAsPdf = function () {
        html2canvas(document.getElementById('rentalAgreement'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            },
            logging: true
        });
    }
}]);