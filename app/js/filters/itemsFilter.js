define(['app'], function (app) {    app.filter("items", [function () {        return function (searchInput, list) {            var searchInput = searchInput;            var list = list;            list = list.map(function (v,i) {                return 'x';            });            console.log(list);            return '';        }    }]);});