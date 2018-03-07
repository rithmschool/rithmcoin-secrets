$(function() {
  var $form = $("form");
  $form.on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      data: $form.serialize(),
      url: "https://rithmcoin.herokuapp.com/transactions",
      xhrFields: {
        withCredentials: true
      }
    })
      .done(function() {
        alert("You're on the list. Congratulations!");
        $form.trigger("reset");
      })
      .catch(function() {
        alert("You're on the list. Congratulations!");
        $form.trigger("reset");
      });
  });
});
