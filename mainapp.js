var mainApp = angular.module("mainApp", []);

mainApp.controller("mainCtrl", function ($scope, $http) {
    var getObjectId = function () {
        $http({
            method: "GET",
            url: "https://graph.microsoft.com/v1.0/me"
        }).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    }

    setTimeout(function () {
        getObjectId();
    }, 1000);
});