'use strict';

angular.module('myApp.Classes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Classes', {
    templateUrl: 'Classes/Classes.html',
    controller: 'ClassesCtrl'
  });
}])

.controller('ClassesCtrl',[
'$scope',
function($scope) {
  $scope.classData={
    100:{name:"Intro to AI", professor:"Rubenstein", dept:"EECS", course:348, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:30",endTime:"13:50", location:"Tech AUD"},
    200:{name:"Game Design", professor:"Forbus", dept:"EECS", course:370, isDiscussion:false, Discussions:[], Days:["T","Th"], startTime:"14:00",endTime:"15:50", location:"Tech LR5"},
    300:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:false, Discussions:[310,320,330], Days:["T","Th"], startTime:"11:00",endTime:"12:20", location:"Tech L211"},
    310:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Kresge 2335"},
    320:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
    330:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Kresge 2335"},
    400:{name:"Social Psychology", professor:"Bodenhousen", dept:"Psych", course:204, isDiscussion:false, Discussions:[], Days:["M","W"], startTime:"14:00",endTime:"15:20", location:"Annenburg 104"},
    500:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:false, Discussions:[510,520], Days:["T","Th"], startTime:"11:00",endTime:"12:20", location:"Tech LR2"},
    510:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
    520:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
    600:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:false, Discussions:[610,620,630], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech AUD"},
    610:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Tech L261"},
    620:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"15:00",endTime:"15:50", location:"Tech L261"},
    630:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Tech L261"},
    700:{name:"Intro to Sociology", professor:"Rawlins", dept:"SOCIO", course:110, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech LR2"},
    800:{name:"Intro to Psychology", professor:"Broaders", dept:"PSYCH", course:110, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech AUD"}
  };

  $scope.classes={
    100:{name:"Intro to AI", professor:"Rubenstein", dept:"EECS", course:348, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:30",endTime:"13:50", location:"Tech AUD"},
    200:{name:"Game Design", professor:"Forbus", dept:"EECS", course:370, isDiscussion:false, Discussions:[], Days:["T","Th"], startTime:"14:00",endTime:"15:50", location:"Tech LR5"},
    300:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:false, Discussions:[310,320,330], Days:["T","Th"], startTime:"11:00",endTime:"12:20", location:"Tech L211"},
    310:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Kresge 2335"},
  };


}]);
