$(document).ready( function () {

  var playerOne = {
    score: [],
    name: "",
    right: [],
    wrong: []
  };
  
  var playerTwo = {
    score: [],
    name: "",
    right: [],
    wrong: []
  };

  var answer = {};

  // find key of currently selected element
  var clickedElement = "";

  // first player points
  var firstPlayerCtx = $('#scoreFirst').html();

  // $('#clickedElementHtml').html(clickedElement);


  $('.img-rounded').click( function (e) {
    // store the inner context from shared class in each HTML and store element symbol value to use as key for object:
    var targetElement = e.target.textContent;
    // replace whitespaces created when accessing target textContent
    var noWhiteSpace = targetElement.replace(/\s/g,'');
    // Add clicked symbol to 'answer object'
    clickedElement = noWhiteSpace;
    console.log(clickedElement);
    $('#clickedElementHtml').html(clickedElement);

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
    console.log(elementAtomic[clickedElement].name);
    console.log(answer.userElemName);

    // compare user input against elementAtomic library. If correct, close 'modal', otherwise try again and 'modal' remains open
    if ( answer.userElemName === elementAtomic[clickedElement].name && answer.userElemAtomicNumber === elementAtomic[clickedElement].an) {
      alert('Correct!');
      $('#myModal').modal('hide');
      var toNum = parseInt(firstPlayerCtx);
      firstPlayerCtx = toNum += 1;
      $('#scoreFirst').html(firstPlayerCtx);
      // After score is updated in HTML push to player object -> score array
      player.score.push(firstPlayerCtx);



      // Re-use and concatenate to disable the clicked element.
      //    |
      $('.' + clickedElement).removeAttr('data-toggle');
                        //        |
                        //   removes Attrobitue
      $('.' + clickedElement).removeClass('hovered');
      $('.' + clickedElement).addClass('greyed-out');


      if (firstPlayerCtx === 118) {
        alert('Congratulations! You have won!');
      }
    }
    else {
      alert('Sorry try again...');
      $('#myModal').modal('show');
    }
  });


});
