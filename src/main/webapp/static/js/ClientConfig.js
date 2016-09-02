angular.module('services', []).factory('ClientConfig', function () {
    return {
        CLIENT_BASE_URL: 'http://localhost:8081/fleetmagic/'
    };
});