define(['app', 'itemCntrl','ScrollDir'], function (app) {    'use strict';    app.controller('productCntrl', ['$scope', '$state', '$stateParams',        function ($scope, $state, $stateParams) {            $scope.name = 'ProductCntrl';            var item, Product;            console.log('productCntrl init');            item = $state.data.product;            Product = function (item) {                this.id = item.id;                this.name = item.name;                this.url = item.url;                this.brand = item.brand;                this.productsList = item.productsList;            };            $scope.Product = new Product(item);            $scope.navItem = function (item) {                $state.data = {item:item};                $state.go('product.item', {itemID: item.id});            };        }]);});