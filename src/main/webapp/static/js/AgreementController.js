/**
 * Created by A101-KAVA on 8/29/2016.
 */

angular.module('fleetMagic').controller('AgreementController',['$scope','fleetMagicService',function ($scope, fleetMagicService) {

    $scope.rentalResponse = fleetMagicService.getRentalAgreement();
    console.log($scope.rentalResponse);
}]);