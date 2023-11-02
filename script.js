//alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("The Best Jokes Ever! + A Poem by Maya Angelou");
$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");
// modify css styles for the button
$("#toggleJokes").css({
    "background-color": "white",
    "color": "black",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});
$("#toggleJokes").click(function() {
    $("#joke").toggle();
  });
  // click to change css style, and back to original
$("#changeStyle").click(function () {
    if ($("#joke").css("color") == "rgb(255, 230, 204)") {
        $("#joke").css("color", "red");
    } else {
        $("#joke").css("color", "rgb(255, 230, 204)");
    }
});
