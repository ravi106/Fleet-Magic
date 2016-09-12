/**
 * Created by A101-KAVA on 8/29/2016.
 */

angular.module('fleetMagic').controller('AgreementController',['$scope','fleetMagicService',function ($scope, fleetMagicService) {

    $scope.rentalResponse = fleetMagicService.getRentalAgreement();
    if($scope.rentalResponse && $scope.rentalResponse.vehicle){
       $scope.rentalResponse.vehicle.vin = $scope.rentalResponse.vehicle.vin.substr($scope.rentalResponse.vehicle.vin.length-6,$scope.rentalResponse.vehicle.vin.length);
    }

    $scope.printDiv = function () {
        var printContents = document.getElementById("rentalAgreement").innerHTML;
        var popupWin = window.open();
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" href="css/fleetMagic.css"></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    };

    $scope.saveAsPdf = function () {
        html2canvas(document.getElementById('rentalAgreement'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL('image/png');
                var imgWidth = 189;
                var pageHeight = 287;
                var imgHeight = canvas.height * imgWidth / canvas.width;

                var heightLeft = imgHeight;

                var pdf = new jsPDF('p','mm');
                var position = 0;
                pdf.addImage(data, 'PNG', 10, 10, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(data, 'PNG', 10, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                if($scope.rentalResponse){
                    pdf.save($scope.rentalResponse.number+ ".pdf");
                }else{
                    pdf.save("rentalAgreement.pdf");
                }
            }
        });
    }
}]);