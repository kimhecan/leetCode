/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = [['','',''],['','',''],['','','']];
    let AorB;
    for(let i=0; i<moves.length; i++) {
        AorB = i % 2 === 0 ? "A" : 'B'
        board[moves[i][0]][moves[i][1]] = AorB;
        if(checkWin(board)) return AorB;
    }
    if(moves.length === 9) return 'Draw'
    else return 'Pending';

};


let checkWin = (board) => {
    let winCondition =  board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2] ||
                        board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2] ||
                        board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2] ||
                        board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0] ||
                        board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1] ||
                        board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2] ||
                        board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
                        board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]
    if(winCondition) return true
    else return false;
}