var app = angular.module('basicsOfForms', []);

app.controller("FormController", function ($scope) {

    $scope.formSubmit = function (event) {

        var form = $("#myform").toString();
        console.log(form);

        event.preventDefault();


    };
});