$(document).ready( function () {

  var player = {
    score: [],
    name: "",
    right: [],
    wrong: []
  };

  $('.hydrogen').click( function () {
    console.log('CLICK!');
  });

  $('.btn-enter').click( function () {
    // Store values from modal input for Element name and Atomic Number:
    var enteredElemName = $('#enteredName').val();
    var enteredAN = $('#enteredAtomicNum').val();
    console.log(enteredElemName);
    console.log(enteredAN);
  });

});
