(function () {
    var MenuCtrl = function ($location) {
        var vm = this;
        vm.isActive = function (ruta) {
            return ruta === $location.path();
        }
    }
    angular.module('appTuCartera').controller('MenuCtrl', ['$location', MenuCtrl]);
}());
