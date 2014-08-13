(function() {

    function mainController() {
        this.selectedList = [];
        this.tagsList = [{name:"AngularJS"},{name:"jQuery"},{name:"Backbone"},{name:"ReactJS"},{name:"CSS"},{name:"Bootstrap"}];
    }

    angular.module('autoComplete',[])
        .controller('mainController',['$scope',mainController])
        .directive('autoComplete', function() {
        return {
            restrict:'E',
            templateUrl: 'src/autoCompleteTemplate.html',
            controller: function($scope) {
                $scope.removeItem = function(item) {
                    angular.forEach($scope.selectedItems, function(value, key) {
                        if (value === item) {
                            $scope.selectedItems.splice(key, 1);
                        }
                    });
                };
            },
            replace: true,
            scope: { items:'=list', selectedItems: '=selected' },
            link: function(scope,elm,attr) {
                scope.title = attr.title;
                scope.placeholder = attr.placeholder;
                scope.addItem = function(item) {
                    scope.selectedItems.push(item);
                    // empty text input
                    scope.itemInput = "";
                    $(".itemsList").css("top",$(".items").outerHeight());
                };
            }
        };
    });
}());