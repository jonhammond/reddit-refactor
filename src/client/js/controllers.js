app.controller('postsController', ['$scope', function($scope) {

  $scope.formClick = 0;
  $scope.commentClick = 0;
  $scope.addCommentClick = 0;
  $scope.sorting = '';

  $scope.submit = function(newPost) {
    $scope.newPost.date = Date.now();
    $scope.newPost = {};
    $scope.postsObject.push(newPost);
  }

  $scope.addComment = function(comment) {
    console.log(comment);
    // $scope.comment.date = Date.now();
    // $scope.comment = {};
    $scope.postsObject[0].comments.push(comment);
  }

  $scope.postsObject = [
    {title: "Outside Aspen, CO", voteCount: 10, description: ipsum, imgUrl:"http://l7.alamy.com/zooms/cdab621b79be43239a18ac9992cfb427/wildflowers-rim-creek-trail-snowmass-village-aspen-colorado-usa-dc2hd8.jpg", postedBy: "Ned Stark", date: 1425928936235, commentCount: 2, comments: [{author: "Steve Jobs", text: "Apple"}, {author: "Steve Jobs", text: "I said 'Apple' motherfucker."}]},
    {title: "Cliffs of Moher", voteCount: 5, description: ipsum, imgUrl:"http://i.imgur.com/Mycvbzf.jpg", postedBy: "Cersei Lannister", date: 1458333343667, commentCount: 1, comments: [{author: "Severus Snape", text: "Cliffs!"}, {author: "Grumpy Gilligan", text: "Fuck this shit."}]},
    {title: "Olympic National Park", voteCount: 2, description: ipsum, imgUrl:"http://outdoor-society.com/cms/wp-content/uploads/2015/03/Wildflowers-and-Lake-Constance-in-Olympic-National-Park.jpg", postedBy: "Bear Grylls", date: 1431634323335, commentCount: 2, comments: [{author: "Jesus", text: "I made this."}, {author: "God", text: "Stahhhp"}]}
  ];


}]);
