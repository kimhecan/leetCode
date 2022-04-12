/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const attackQueens = [];
    let t = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];
    
    for(let i=0; i<t.length; i++) {
        let kingx = king[0];
        let kingy = king[1];
        let alreadyCheck = false; 
        while(kingx <= 8 && kingy <= 8 && kingx >= 0 && kingy >= 0) {
            kingx += t[i][0];
            kingy += t[i][1];
          for(let j=0;j<queens.length; j ++) {
            if(JSON.stringify(queens[j]) === JSON.stringify([kingx, kingy])) {
               attackQueens.push([kingx, kingy]);
               alreadyCheck = true;
            }
          }
          if(alreadyCheck) break;
        }
    }

    return attackQueens;
};