$(document).ready( function () {
  var playerOne = {
    score: [],
    name: "",
    right: []
  };
  var playerTwo = {
    score: [],
    name: "",
    right: []
  };
  var dice = {
    sides: 6,
    roll: function () {
      var randomNum = Math.floor(Math.random() * this.sides) + 1;
      return randomNum;
    }
  };
  var answer = {};
  var clickedElement = "";
  var firstPlayerCtx = $('#scoreFirst').html();
  var secondPlayerCtx = $('#scoreSecond').html();
  var playerTurn = 0;
  var currentPlayer = playerOne;

  $('.img-rounded').click( function (e) {
    // store the inner context from shared class in each HTML and store element symbol value to use as key for object:
    var targetElement = e.target.textContent;
    var noWhiteSpace = targetElement.replace(/\s/g,'');
    clickedElement = noWhiteSpace;
    $('#clickedElementHtml').html(clickedElement);
  });

  $('.btn-enter').click( function () {
    var enteredElemName = $('#enteredName').val();
    var enteredAtomicNumber = $('#enteredAtomicNum').val();

    answer.userElemName = enteredElemName;
    answer.userElemAtomicNumber = enteredAtomicNumber;
    // clear input values using .val("")
    $('#enteredName').val("");
    $('#enteredAtomicNum').val("");

    if ( answer.userElemName === elementAtomic[clickedElement].name &&
         answer.userElemAtomicNumber === elementAtomic[clickedElement].an) {
      $('#myModal').modal('hide');

      if ((playerTurn % 2 === 0) ) {
        $('.player-one').css("text-shadow","0 0 0 #fff" );
        $('.player-two').css("text-shadow","1px 1px 10px #fff" );
        var toNum = parseInt(firstPlayerCtx);
        firstPlayerCtx = toNum += 1;
        $('#scoreFirst').html(firstPlayerCtx);
        playerTurn += 1;

      }
      else {
        $('.player-two').css("text-shadow","0 0 0 #fff");
        $('.player-one').css("text-shadow","1px 1px 10px #fff");
        currentPlayer = playerTwo;
        toNum2 = parseInt(secondPlayerCtx);
        secondPlayerCtx = toNum2 += 1;
        $('#scoreSecond').html(secondPlayerCtx);
        playerTurn +=1;
      }

      playerOne.score.push(firstPlayerCtx);
      playerOne.right.push(firstPlayerCtx);

      $('.' + clickedElement).removeAttr('data-toggle');
      $('.' + clickedElement).removeClass('hovered');
      $('.' + clickedElement).addClass('greyed-out');

      if (firstPlayerCtx === 118 || secondPlayerCtx === 118) {
        alert('Congratulations! You have won!');
      }
    }
    else {
      $('#myModal').modal('hide');
      playerTurn +=1;
      alert('Wrong! Next player\'s turn!');
    }
  });

    if (currentPlayer === playerOne) {
      $('.player-one').css("text-shadow","1px 1px 10px #fff");
    }
    else if (currentPlayer === playerTwo) {
      $('.player-two').css("text-shadow","1px 1px 10px #fff" );
    }

  function printNum (num) {
    var placeHolder = $('#placeHolder');
    placeHolder.html(num);
  }

  $('#dice-btn').click(function () {
    var result = dice.roll();
    printNum(result);
  });
});
