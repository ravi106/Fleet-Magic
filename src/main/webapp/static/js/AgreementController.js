/**
 * Created by A101-KAVA on 8/29/2016.
 */

angular.module('fleetMagic').controller('AgreementController',['$scope','fleetMagicService',function ($scope, fleetMagicService) {

    $scope.rentalResponse = fleetMagicService.getRentalAgreement();
    console.log($scope.rentalResponse);

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