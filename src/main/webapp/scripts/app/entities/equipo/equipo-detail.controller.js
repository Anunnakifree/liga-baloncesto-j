'use strict';

angular.module('ligaBaloncestoJApp')
    .controller('EquipoDetailController', function ($scope, $rootScope, $stateParams, entity, Equipo, Jugador) {
        $scope.equipo = entity;
        $scope.load = function (id) {
            Equipo.get({id: id}, function(result) {
                $scope.equipo = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJApp:equipoUpdate', function(event, result) {
            $scope.equipo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
