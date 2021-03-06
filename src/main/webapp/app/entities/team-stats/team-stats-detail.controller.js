(function() {
    'use strict';

    angular
        .module('piratesflApp')
        .controller('TeamStatsDetailController', TeamStatsDetailController);

    TeamStatsDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'TeamStats', 'Season', 'Team'];

    function TeamStatsDetailController($scope, $rootScope, $stateParams, previousState, entity, TeamStats, Season, Team) {
        var vm = this;

        vm.teamStats = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('piratesflApp:teamStatsUpdate', function(event, result) {
            vm.teamStats = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
