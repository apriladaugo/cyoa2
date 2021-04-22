var story = 0;
var form = document.getElementById('theAdventure');
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
	"start":{
		"question": "Muna see a hut, should he go in or head back home?",
		"answers": {
			"a": "Hut",
			"b": "Home",
	}
},
	//Hut
	"1_a":{
		"question": "Muna finds 3 plates of jollof rice on the table, help Muna choose the right plate?",
		"answers": {
			"a": "Plate 1 .... spicy jollof",
			"b": "Plate 2 .... vegan jollof",
			"c": "Plate 3 .... plain jollof",
	}
},

//stool
	"2_a":{
		"question": "Muna finds 3 stools, help Muna choose the right stool so he can enjoy his plate of jollof?",
		"answers": {
			"a": "Stool 1 .... very hard stool",
			"b": "Stool 2 .... too soft stool",
			"c": "Stool 3 .... medium stool",
	}
},

//bed
	"3_a": {
		"question": "Muna is exhausted and needs to take a nap. He finds 3 beds inside the hut, help Muna choose the right bed?",
		"answers": {
			"a": "Bed 1 .... Hard bed",
			"b": "Bed 2 .... very soft bed",
			"c": "Bed 3 .... soft by firm bed",
	}
}
};

//continue link
submit.addEventlistener('mouseup', function(){
	answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
	if(answer) {
		story++;
		populateForm(story + '_' + answer);
		console.log("story time!");
	}
});


//reset button
function resetForm(){
	document.getElementById('theAdventure').reset();
}

//generate answers from story 
function populateForm(story){
	var current_story = story_telling[story];
	var text = '';
	for (var prop in current_story['answers']){
		if(current_story['answers'].hasOwnProperty(prop)){
			text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answer'][prop] + '</span></label>';
		}
	}

	form.querySelectorAll('p').innerHTML = current_story.question;
	form.querySelectorAll('fieldset').innerHTML = text;
}

populateForm('start');