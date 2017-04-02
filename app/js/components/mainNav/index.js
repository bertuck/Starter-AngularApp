(function() {
    'use strict';
    angular.module('angularApp.mainNav', [])
        .directive('mainNav', function() {
            return {
                restrict: 'E',
                templateUrl: 'blocks/main-nav.html',
                controller: 'MainNavController'
            }
        })
        .controller('MainNavController', ['$scope', function($scope) {
            $scope.showWidget = true;
            $scope.menuClass = 'collapse navbar-collapse';
            $scope.openMenu = function () {
                $scope.menuClass = ($scope.menuClass == 'collapse navbar-collapse' ? '' : 'collapse navbar-collapse');
            };
            $scope.openWeatherWidget = function () {
                $scope.showWidget = !$scope.showWidget;
                $scope.menuClass = ($scope.menuClass == 'collapse navbar-collapse' ? '' : 'collapse navbar-collapse');
            };
        }])
})();