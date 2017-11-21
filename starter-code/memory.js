// //******************************************************************
// // Game Logic
// //******************************************************************
var TTT = function() {
    this.cards = [
  		{ name: "circulo",         img: "aquaman.jpg" },
  		{ name: "cruz",          img: "batman.jpg" } 
    ];
    
    this.board = new Array(9).fill(' ');
    this.turno = 0;
};

TTT.prototype.cambiarTurno = function(){
    
    if(turno == 0){
        
        turno = 1;
        $('#turno').text("Turno de las X");
        
    }else{
        
        turno = 0;
        $('#turno').text("Turno de las O");
        
    }
    
}

TTT.prototype.clickPos = function(i){
    
    if(this.posChange(i)){
    
        this.cambiarTurno();
        
    }
    
    this.comprobarTablero();
    
}

TTT.prototype.posChange = function(i){
    
    var element = $('div[i*="'+i+'"]');
    
    if(!(element.is('.pos_x') || element.is('.pos_o'))){
        
        if(turno == 0){
            
            element.addClass('pos_o');
            this.board[i] = "O";
            
        }else{
            
            element.addClass('pos_x');
            this.board[i] = "X";
        }
        
        return true;
        
    }else{
        
        console.log("Posición ya usada!");
        
        return false;
        
    }
        
        
}


TTT.prototype.comprobarTablero = function(){
    
    var b = this.board;
    
    console.log(b);
    
 
        
    if((b[0] == 'X' && b[1] == 'X' && b[2] == 'X') 
        || (b[3] == 'X' && b[4] == 'X' && b[5] == 'X')
        || (b[6] == 'X' && b[7] == 'X' && b[8] == 'X')
        || (b[0] == 'X' && b[3] == 'X' && b[6] == 'X')
        || (b[1] == 'X' && b[4] == 'X' && b[7] == 'X')
        || (b[2] == 'X' && b[5] == 'X' && b[8] == 'X')
        || (b[0] == 'X' && b[4] == 'X' && b[8] == 'X')
        || (b[2] == 'X' && b[4] == 'X' && b[6] == 'X')){
                
            $('#turno').text("### Ganan las X! ###");
               
            this.endGame();
                
    }else{
            
        if((b[0] == 'O' && b[1] == 'O' && b[2] == 'O') 
            || (b[3] == 'O' && b[4] == 'O' && b[5] == 'O')
            || (b[6] == 'O' && b[7] == 'O' && b[8] == 'O')
            || (b[0] == 'O' && b[3] == 'O' && b[6] == 'O')
            || (b[1] == 'O' && b[4] == 'O' && b[7] == 'O')
            || (b[2] == 'O' && b[5] == 'O' && b[8] == 'O')
            || (b[0] == 'O' && b[4] == 'O' && b[8] == 'O')
            || (b[2] == 'O' && b[4] == 'O' && b[6] == 'O')){
                
                $('#turno').text("### Ganan las O! ###");
                
                this.endGame();
                
        }else{
                
                
                
            if(jQuery.inArray(" ", b) == -1){
        
                $('#turno').text("### Tablas ###");
                    
            }
                
        }

    }
    
}


TTT.prototype.endGame = function(){
    
    
    $('#memory_board').off('click','.pos');
    
    
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  TTT_game = new TTT();
  var html = '';
  
  console.log(TTT_game.board);

  TTT_game.board.forEach(function(pic, index) {
      
    console.log("Una carta");

    html += '<div class="pos" id="pos" i="'+index+'">';
    html += '</div>';
    
  });
  
  document.getElementById('memory_board').innerHTML = html;
  
  
  
  $('#memory_board').on('click','.pos', function(){
      
      console.log($(this).attr('i'));
      
      TTT_game.clickPos($(this).attr('i'));
      
  });
  
  
});
