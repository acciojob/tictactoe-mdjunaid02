document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').onclick = function() {
    // Hide input, show game
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.game-section').style.display = 'block';

    // Get player names
    const player1 = document.getElementById('player1').value.trim();
    const player2 = document.getElementById('player2').value.trim();

    // Initialize game state
    let turn = 'X';
    let currPlayer = player1;

    // Show welcome message
    document.querySelector('.message').textContent = player1 + ", you're up";

    // Setup cells click handlers
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
      cell.textContent = ''; // clear if restarting
      cell.style.pointerEvents = 'auto'; // enable clicking
      cell.onclick = function() {
        if(cell.textContent === '') {
          cell.textContent = turn;

          if (checkWin(turn)) {
            document.querySelector('.message').textContent = currPlayer + ' congratulations you won!';
            // Disable further clicks
            cells.forEach(c => c.style.pointerEvents = 'none');
            return;
          }

          if (checkDraw()) {
            document.querySelector('.message').textContent = "It's a draw!";
            return;
          }

          // Switch turn
          if (turn === 'X') {
            turn = 'O';
            currPlayer = player2;
          } else {
            turn = 'X';
            currPlayer = player1;
          }
          document.querySelector('.message').textContent = currPlayer + ", you're up";
        }
      };
    });

    // Functions to check win/draw
    function checkWin(player) {
      const winPatterns = [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
      ];
      return winPatterns.some(pattern => 
        pattern.every(id => document.getElementById(id).textContent === player)
      );
    }

    function checkDraw() {
      return [...cells].every(cell => cell.textContent !== '');
    }
  };
});
