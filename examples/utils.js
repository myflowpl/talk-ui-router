myApp.directive('urlBar', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="url-bar"><div><span>url:</span> {{getLocation()}}</div></div>',
        controller: function($scope){
            $scope.getLocation = function(){
                return location.hash.substr(1);
            };
        }
    }
})