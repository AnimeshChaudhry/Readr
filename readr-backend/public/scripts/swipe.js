interact('.book')
  .on('tap', function(event) {
    event.currentTarget.classList.toggle('nope');
    event.preventDefault();
  })
  .on('doubletap', function(event) {
    event.currentTarget.classList.toggle('like');
    //event.currentTarget.classList.remove('rotate');
    /*dpd.users.me(function(users) {
      if (users) {
        users.likes = "Test Like";
        //$("#names").innerHTML;
      }
    });*/
    event.preventDefault();
  })
  .on('hold', function(event) {
    event.currentTarget.classList.toggle('rotate');
    event.currentTarget.classList.remove('large');
  });

dpd.users.me(function(users) {
  if (users) {
    $("#likes").text(users.likes);
  }
});
