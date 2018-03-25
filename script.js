 p1Symbol: "X";
  p2Symbol: "O";
var gameState = {
  p1Symbol: "X",
  p2Symbol: "O",
  squares: [
  "","","","","","","","",""
  ]
};

var p2Move = function(){
  var randomSquare = Math.floor(Math.random()*10);
  if (gameState.squares[randomSquare-1] === ""){
    gameState.squares[randomSquare-1] = gameState.p2Symbol;
    var squareID = "#s"+ randomSquare;
    $(squareID).html(gameState.p2Symbol);
  } else {
    p2Move();
  };
};

var reset = function(){
   $(".square").html("");
 gameState.squares = [
  "","","","","","","","",""
  ];
};

var win = function(){
  var winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  winCombos.find(function(combo){
    if (gameState.squares[combo[0]] !== "" && gameState.squares[combo[0]] == gameState.squares[combo[1]] && gameState.squares[combo[1]] == gameState.squares[combo[2]]){
     if (gameState.squares[combo[0]] == gameState.p1Symbol){
      alert("Congrats! You won!",{
        autoHide: true,
        autoHideDelay: 1500,
        className: "success"
      });
     } else {
       alert("Sorry! You lost!",{
        autoHide: true,
        autoHideDelay: 1500,
        className: "info"
       });
     }
      setTimeout(reset, 1500);
    }
  })};

$(".square").click(function(e){
  $(this).html(gameState.p1Symbol);
  var dataID = (parseInt(e.target.id.charAt(1)));
  gameState.squares[dataID-1] = $(this).html();
  p2Move();  
  win();
  if (!gameState.squares.includes("")){
    reset();
  }
});

$("#reset").click(function(){
 reset();
});

