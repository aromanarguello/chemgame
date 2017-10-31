$(document).ready( function () {

  var player = {
    score: [],
    name: "",
    right: [],
    wrong: []
  };

  var answer = {};
  // find key of currently selected element
  var clickedElement = "";

  $('.img-rounded').click( function (e) {
    // store the inner context from shared class in each HTML and store element symbol value to use as key for object:
    var targetElement = e.target.textContent;
    // replace whitespaces created when accessing target textContent
    var noWhiteSpace = targetElement.replace(/\s/g,'');
    // Add clicked symbol to 'answer object'
    clickedElement = noWhiteSpace;
    console.log(clickedElement);
    // Add functionality to 'enter' button in modal after it checks answer is correct
    // $('#modal').modal('hide');


  });



  $('.btn-enter').click( function () {
    // Store values from modal input for Element name and Atomic Number:
    var enteredElemName = $('#enteredName').val();
    var enteredAtomicNumber = $('#enteredAtomicNum').val();
    // Add input values to (answer) 'object':
    answer.userElemName = enteredElemName;
    answer.userElemAtomicNumber = enteredAtomicNumber;

    // clear input values using .val("")
    $('#enteredName').val("");
    $('#enteredAtomicNum').val("");

    // use [clickedElement] to pick the same element that was clicked by player
    // var elementAtomicClicked = elementAtomic[clickedElement];
    console.log(elementAtomic[clickedElement].name);
    console.log(answer.userElemName);

    // compare user input against elementAtomic library
    if ( answer.userElemName === elementAtomic[clickedElement].name && answer.userElemAtomicNumber === elementAtomic[clickedElement].an) {
      alert('Correct!');
    }
    else {
      alert('Sorry try again...');
    }
  });



});



// compare results of users with content of obj
