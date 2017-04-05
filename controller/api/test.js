var url = "http://54.68.179.167/api/test/";
var app = angular
  .module('myApp', [])
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  });

app.url =
app.controller('TestController', function($http){
  var testCtrl = this;

  testCtrl.getTest = function(idx){
   //사용자 id가 매개변수로 넘어온 경우 url에 id 매개변수 붙이기
  // var idx = idx;

   $http.get(url + idx)
   .then(function(res){

     //응답 성공 시 실행
     testCtrl.test = res.data[0];
     testCtrl.res = res;
   })
   .catch(function(error){
     //실패시 실행
     console.log('오류 발생');
     testCtrl.res = error;
   })
   .finally(function() {
     //성공, 실패 어떤 경우에도 실행
     console.log('finish getUser()');
    });
  };

  testCtrl.postApi = function(idx, label) {
    var postData = {"idx":idx, "label":label};//JSON.stringify({idx:11});
    var req = {
      method: 'POST',
      url: url,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      data: postData
    };

    $http(req)
    .then(function(res){
      testCtrl.test = res.data[0];
      testCtrl.res = res;
    })
    .catch(function(error){
      console.log('error');
      testCtrl.res = error;
    })
    .finally(function(){
      console.log('finish post()');
    });
  };
});
