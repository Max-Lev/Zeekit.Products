define(['app',        'imagesService',        'productCntrl',        'angular',        'itemsFilter',        'enterClick'],    function (app,              imagesService,              productCntrl,              angular,              itemsFilter) {        app.controller('productsCntrl',            ['$scope',                'imagesLazyLoading',                '$timeout',                '$rootScope',                '$state',                '$stateParams',                '$filter',                'imagesService',                function ($scope,                          imagesLazyLoading,                          $timeout,                          $rootScope,                          $state,                          $stateParams,                          $filter,                          imagesService) {                    console.log('productsCntrl init');                    imagesService.setUser('max lev');                    /*                     * PRODUCTS LIST FROM ROUTER RESOLVE SERVICE                     * */                    $scope.productsList = imagesLazyLoading.products;                    setProducts($scope.productsList);                    /*                     * MAPPING LIST FOR REQUIRED OBJECT PROPERTIES                     * */                    function setProducts(productsList) {                        $scope.catalog = productsList.map(function (prod, i) {                            var product;                            product =                                {                                    id: prod.id,                                    name: prod.name,                                    url: prod.image_url,                                    brand: prod.user_name,                                    productsList: prod.products                                };                            return product;                        });                    };                    displayLimit($scope.catalog);                    function displayLimit(list) {                        $scope.list = [];                        for (var i = 0; i <= 9; i++) {                            $scope.list.push(list[i]);                        }                        $scope.catalog = $scope.list;                        console.log($scope.catalog);                    };                    $scope.productDescription = function (product) {                        $state.data = {product: product};                        $state.go('product', {id: product.id});                    };                    $scope.displayBlock = false;                    $timeout(function () {                        $scope.displayBlock = true;                        $rootScope.active = false;                    }, 0);                    $(document).ready(function () {                        $(window).on('click', function (event) {                            console.log('click: ' + event);                        });                    });                    $scope.sortProductsbyNameFN = function (productNames) {                        debugger;                        var filteredNames = $filter('items')(productNames, $scope.catalog);                        console.log(filteredNames);                    };                }]);    });