angular.module("appTuCartera", ['ngResource','ngRoute']);

angular.module('appTuCartera').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
           controller: 'InicioCtrl',
            controllerAs: 'vm',
            templateUrl: 'inicio/inicio.html'
        })
        .when('/carteras/nueva', {
            controller: 'CarterasCtrl',
            controllerAs: 'vm',
            templateUrl: 'carteras/nuevaCartera.html'
        })
        .when('/carteras/lista', {
            controller: 'CarterasCtrl',
            controllerAs: 'vm',
            templateUrl: 'carteras/listaCarteras.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
