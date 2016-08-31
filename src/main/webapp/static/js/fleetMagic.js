var fleetMagic = angular.module('fleetMagic', ['ui.router', 'services', 'ui.bootstrap', 'ui.select', 'ngSanitize']);

    //.run(function (acuteSelectService) {
    // Set the template path for all instances
//     acuteSelectService.updateSetting("templatePath", "js/templates/");
// });

fleetMagic.controller('fleetMagicController', ['$scope', '$http', 'ClientConfig', '$state', function ($scope, $http, ClientConfig, $state) {

    $scope.state = $state;

}]);