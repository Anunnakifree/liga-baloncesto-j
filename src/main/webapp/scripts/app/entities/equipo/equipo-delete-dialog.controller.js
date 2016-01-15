'use strict';

angular.module('ligaBaloncestoJApp')
	.controller('EquipoDeleteController', function($scope, $uibModalInstance, entity, Equipo) {

        $scope.equipo = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Equipo.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
