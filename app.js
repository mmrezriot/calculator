var app = angular.module('calculatorApp', []);
app.controller('CalculatorController', function($scope) {
    $scope.display = "";
    
    $scope.append = function(value) {
        $scope.display += value;
    };
    
    $scope.clear = function() {
        $scope.display = "";
    };
    
    $scope.backspace = function() {
        $scope.display = $scope.display.slice(0, -1);
    };
    
    $scope.calculate = function() {
        try {
            $scope.display = eval($scope.display);
        } catch (e) {
            $scope.display = "خطا";
        }
    };
});