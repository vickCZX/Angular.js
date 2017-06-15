/**
 * Created by Administrator on 2017/6/14.
 */
;(function (angular) {

                //1.创建模块
    var app = angular.module('app',[]);
                //2.创建控制器
    app.controller('Textcontroller',['$scope',function ($scope) {
         //标题
        $scope.title ="哈哈哈";

         //展示数据
        $scope.showText = [
            {name:'zs', check:false},
            {name:'ls', check:false},
            {name:'ss', check:false},
            {name:'xs', check:false},
         ];

        //添加数据
        $scope.add = function (e) {
            //阻止事件默认行为
            e.preventDefault()
            var task ={name:$scope.taskContent,check:false}
            $scope.showText.unshift(task)

        };

        //删除数据
        $scope.delete = function(key){

            $scope.showText.splice(key ,1)

        };

        $scope.finishList = [
            {name:'xx', check:true}

        ];


        //处理已经完成的
        $scope.doFinish = function (key) {

         var item  =  $scope.showText.splice(key ,1);

         item[0].check = true;

         $scope.finishList.push(item[0])




        }



    }])









})(angular)