/**
 * Created by A101-KAVA on 8/29/2016.
 */

angular.module('fleetMagic').factory('fleetMagicService', function () {

    var rentalAgreement = null;
    var fleetMagicService = {
        getRentalAgreement: function () {
            return rentalAgreement;
        },
        setRentalAgreement: function (rentalResponse) {
            rentalAgreement = rentalResponse;
        }
    };
    return fleetMagicService;
});