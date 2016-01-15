'use strict';

angular.module('ligaBaloncestoJApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


