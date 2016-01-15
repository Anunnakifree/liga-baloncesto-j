 'use strict';

angular.module('ligaBaloncestoJApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-ligaBaloncestoJApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-ligaBaloncestoJApp-params')});
                }
                return response;
            }
        };
    });
