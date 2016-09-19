
App.controller('WelcomeController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);


var vand = 'Token 58c9a5dbe2d373e10d5818494b9eaac695283311';

        $scope.Product = function(){

            $http({
                method: 'GET',
                url: 'http://api.nightoutloud.com/api/v1/venue_state_slots/?data_type=historical',
                headers:{'authorization':vand}

            }).success(function(data){
                console.log(data);
                $scope.tableData = data.results;
                angular.forEach($scope.tableData,function(dataDetails){
                    console.log(dataDetails);
                    if(dataDetails.venue.image == null){
                        $scope.productImg = "../images/blueAbs.jpg";
                    }else{
                        $scope.productImg = dataDetails.venue.image;
                    }
                })
            }).error(function(data){
                console.log(data);
            });
        }
        $scope.Product();




        $scope.ViewDetails  = function(data){
            console.log(data);
            $('#myModal').modal('show');
        }


});