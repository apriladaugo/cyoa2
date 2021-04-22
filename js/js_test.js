var playGame = function() {
    // Game Logic
    var hutStageInput = document.getElementById('hutStageInput').value;
    var jollofStageInput = document.getElementById('jollofStageInput').value;

    alert(hutStageInput);
    // document.body.style.backgroundColor = hutStageInput;
    if (hutStageInput == "enter") {
        alert("Muna is entering the hut...");
        window.top.location = 'jollof_stage.html';
        // window.location.replace("http://www.w3schools.com");
    } else if (hutStageInput == "home") {
        // Muna choose option 2
        alert("The hut looks scary, Muna is heading back home...");
        window.top.location = 'index.html';

    }

    if (jollofStageInput == "plate 1") {
        alert("Muna choose plate 1...");
        window.top.location = 'stool_stage.html';
        // window.location.replace("http://www.w3schools.com");
    } else if (hutStageInput == "home") {
        // Muna choose option 2
        alert("The hut looks scary, Muna is heading back home...");
        window.top.location = 'index.html';

    }
}