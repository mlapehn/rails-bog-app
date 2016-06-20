// Function to start game // 
function startGame(sg) {
    document.turn = "X";
    // Need if statement to clear board //
    if (square.innerHTML === "X" && "O"); {

    }
    // if square is = to x and or o reset //
    // document.winner = null; //
}
setMessage(document.turn + " get's to start."); // setMessage not working
// Funciton to display message //
// Needs work//
function setMessage(msg) {
       document.ElementsByClassName("messageBoard").innerHTML = msg;
    }
      //  Function to get next move //

function nextMove(square) {
        if (square.innerHTML === "") {
            square.innerHTML = document.turn;
            switchTurn();
        } else {
            alert("No cheating!!");
        }
    }
    // Function to switch turn //

function switchTurn(swt) {
    if (document.turn == "X") {
        //alert("Player 1's turn!")
        document.turn = "O";
        //alert("Player 2's turn!.")
    } else {
        document.turn = "X";
        //alert("Player 1's turn!")
    }
    // Set message goes here
}

// function checkRow(a, b, c, move) {
//        var result = false;
//        if (getbox(a) == move && getbox(b) == move && getbox(c) == move) {
//            result = true;
//        }
//        return result;
//    }
    // restart stuff //
    // button doesn't work //


function restartGame(restartGame){

}
    // checks for winner // 
    // Still not working //
    //function checkForWinner(move) {
    //  var result = false;
    //  if (checkRow(1, 2, 3, move) || 
    //    checkRow(4, 5, 6, move) || 
    //    checkRow(7, 8, 9, move) ||
    //    checkRow(1, 4, 7, move) ||
    //    checkRow(2, 5, 8, move) ||
    //    checkRow(3, 6, 9, move) ||
    //    checkRow(1, 5, 9, move) ||
    //    checkRow(3, 5, 7, move)) {
    //
    //    result = true;
    //  }
    //}
    //
    //  }
    //
    //  return result;
    //}