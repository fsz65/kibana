/**
 * Created by 15061857 on 2017/5/4.
 */
define(function (require) {
  let _ = require('lodash');
  let angular = require('angular');
  //require('ace');

  let html = require('ui/fsz_user/fsz_user.html');
  //require('ui/fsz_user/style/less/font-awesome.less');
  require('ui/fsz_user/style/css/user.css');

  require('ui/modules').get('kibana')
    .directive('loginUser', function (config, Private) {
      return {
        restrict: 'E',
        template: html,
        replace:true,
        scope: {

        },
        link: function ($scope){
          $scope.jobNumber = "15061857";
          var clickStatus = $scope.clickStatus = false;
          $scope.showLoginUserStyle = function () {
            if ($scope.clickStatus == false){
              return "dropdown dropdown-user";
            }else {
              return "dropdown dropdown-user open";
            }
          };

          $scope.showClickStatus = function () {
            $scope.clickStatus = !$scope.clickStatus;
          }
        }
      };
    });
});
