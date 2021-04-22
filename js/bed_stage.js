var bed3 = function() {
    alert('This bed is perfect......right choice');
    // link to another page. location.replace disables the back button
    location.replace('game_ending.html');
}

var bed1 = function() {
    alert('Oh Oh......Muna chose the first bed..... too hard');
    // link to another page.
    location.replace("game_over2.html");
}

var bed2 = function() {
    alert('Oh Oh......Muna chose the second bed..... too soft');
    // link to another page.
    location.replace("game_over2.html");
}