(function(){
//export html table to pdf, excel and doc format directive
    var exportTable = function(){
        var link = function($scope, elm, attr){
            $scope.$on('export-pdf', function(e, d){
                elm.tableExport({type:'pdf', escape:'false'});
            });
        };
        return {
            restrict: 'C',
        link: link
    }
    };
    angular.module('fleetMagic').directive('exportTable', exportTable);
})();