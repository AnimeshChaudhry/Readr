(function(window) {
  "use strict";
  var $ = window.jQuery;

  function myFunction() {
    location.reload();
  }

  var id_List = [];
  dpd.users.get(function(users) {
    if (users) {
      var i;
      for (i = 0; i < users.length; i++) {
        id_List.push(users[i].id);
      }
    }
  });

  dpd.users.me(function(user) {
    if (user) {
      var i;
      for (i = 0; i < id_List.length; i++) {
        if (id_List[i] == user.id) {
          id_List.splice(i, 1);
        }
      }
      console.log("id_List: " + id_List);
      console.log(id_List.length);
      var randomNum = Math.floor(Math.random() * id_List.length);
      var random = id_List[randomNum];
      id_List.splice(randomNum, 1);
      console.log("random id: " + random);
      dpd.users.get({
        id: random
      }, function(users) {

        $("#book1").text(users.book1);
        $("#book2").text(users.book2);
        $("#book3").text(users.book3);
        $("#book4").text(users.book4);
        $("#book5").text(users.book5);
        $(".name").text(users.firstname + " " + users.lastname);

      });
    }
  });


})(window);
