(function () {
    var carterasFactory =   function ($resource)  {
        return $resource("/api/carteras/", {});
    };

    angular.module("appTuCartera").factory('carterasFactory',carterasFactory);
}());
