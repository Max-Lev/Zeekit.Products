define(['app', 'ProductDataDirective'], function (app) {    app.controller('itemCntrl',        ['$scope', '$state', '$stateParams',            function ($scope, $state, $stateParams) {                var itemProduct;                console.log('itemCntrl init');                itemProduct = function (item) {                    this.name = item.name;                    this.img = item['url.jpg'];                };                $scope.item = new itemProduct($state.data.item);                ///passing data to directive                $scope.productData = $scope.item;                $scope.$watch(function () {                    $scope;                    console.log($scope);                }, false);            }]);});