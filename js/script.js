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
  var clickedElement = "";
  var firstPlayerCtx = $('#scoreFirst').html();
  var secondPlayerCtx = $('#scoreSecond').html();

  $('.img-rounded').click( function (e) {
    // store the inner context from shared class in each HTML and store element symbol value to use as key for object:
    var targetElement = e.target.textContent;
    // replace whitespaces created when accessing target html()
    var noWhiteSpace = targetElement.replace(/\s/g,'');
    clickedElement = noWhiteSpace;
    console.log(clickedElement);
    $('#clickedElementHtml').html(clickedElement);
  });

  $('.btn-enter').click( function () {
    var enteredElemName = $('#enteredName').val();
    var enteredAtomicNumber = $('#enteredAtomicNum').val();
    // Add input values to (answer) 'object':
    answer.userElemName = enteredElemName;
    answer.userElemAtomicNumber = enteredAtomicNumber;
    // clear input values using .val("")
    $('#enteredName').val("");
    $('#enteredAtomicNum').val("");

    console.log(elementAtomic[clickedElement].name);
    console.log(answer.userElemName);

    if ( answer.userElemName === elementAtomic[clickedElement].name &&
         answer.userElemAtomicNumber === elementAtomic[clickedElement].an) {
      $('#myModal').modal('hide');
      var toNum = parseInt(firstPlayerCtx);
      firstPlayerCtx = toNum += 1;
      $('#scoreFirst').html(firstPlayerCtx);

      playerOne.score.push(firstPlayerCtx);
      playerOne.right.push(firstPlayerCtx);
      console.log(playerOne);

      $('.' + clickedElement).removeAttr('data-toggle');
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
