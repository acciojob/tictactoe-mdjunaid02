document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').onclick = function() {
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.game-section').style.display = 'block';

    const player1 = document.getElementById('player1').value.trim();
    const player2 = document.getElementById('player2').value.trim();

    let turn = 'x';
    let currPlayer = player1;
    document.querySelector('.message').textContent = `${player1}, you're up`;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = '';
      cell.style.pointerEvents = 'auto';
      cell.onclick = function() {
        if (cell.textContent === '') {
          cell.textContent = turn;

          if (checkWin(turn)) {
            document.querySelector('.message').textContent = `${currPlayer} congratulations you won!`;
            cells.forEach(c => c.style.pointerEvents = 'none');
            return;
          }
          if (checkDraw()) {
            document.querySelector('.message').textContent = "It's a draw!";
            return;
          }

          if (turn === 'x') {
            turn = 'o';
            currPlayer = player2;
          } else {
            turn = 'x';
            currPlayer = player1;
          }
          document.querySelector('.message').textContent = `${currPlayer}, you're up`;
        }
      };
    });

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
