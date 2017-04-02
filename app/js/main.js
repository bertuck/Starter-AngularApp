import angular from 'angular';

import 'angular-ui-router';
import './templates';
import './config';
import './components/query';
import './components/mainNav';
import './components/more';


(function() {
    /**
     * Definition of the main app module and its dependencies
     */
    angular.module('angularApp', [
        'ui.router',
        'templates',
        'angularApp.constants',
        'angularApp.query',
        'angularApp.mainNav',
        'angularApp.more',
    ])

        .config([
            '$stateProvider',
            '$locationProvider',
            function ($stateProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: 'pages/home.html',
                        controllerAs: 'main',
                        title: 'Home'
                    })
                    .state('More', {
                        url: '/more',
                        templateUrl: 'pages/more.html',
                        controller: 'MoreController',
                        controllerAs: 'main',
                        title: 'More'
                    })
                    .state('404server', {
                        templateUrl: 'pages/404.html'
                    })
                    .state('404client', {
                        url: '*path',
                        templateUrl: 'pages/404.html'
                    });

                $locationProvider.html5Mode(true).hashPrefix('');
            }]);

    angular.bootstrap(document, ['angularApp'], {
        strictDi: true
    });

})();
