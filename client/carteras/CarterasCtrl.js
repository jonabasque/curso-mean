(function () {
    var CarterasCtrl = function (carterasFactory) {
        var vm = this;
        vm.titulo = "Carteras";
        vm.carteras = carterasFactory.query();
        vm.guardarCartera = guardarProyecto;

        function guardarCartera() {
            var nuevaCartera = new carterasFactory(vm.nuevaCartera);
            nuevaCartera.$save();
        }

    }
    angular.module("appTuCartera").controller("CarterasCtrl", ['carterasFactory', CarterasCtrl]);
}());
