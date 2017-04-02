(function() {
    'use strict';
    angular.module('angularApp.more', [
        'angularApp.constants',
    ])
        .service('moreService', [
            '$http',
            '$q',
            "$log",
            function($http, $q, $log, ApiConstants) {

                var tmp = {};

                this.init = function() {
                    return tmp;
                };

                init();
            }])

        .controller('MeteoController', [
            '$scope',
            '$log',
            'moreService',
            function($scope, $log, moreService) {

                var init = function() {
                    //$scope.init = moreService.init();
                };

                var run = function() {

                };

                init();

                run();
            }]);
})();