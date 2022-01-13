/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let changes = [];
    for(let i=0; i<bills.length; i++) {
        let bill = bills[i];
        let fiveChangeIndex;
        let tenChangeIndex;
        switch (bill) {
            case 5:
                changes.push(5);
                break;
            case 10:
                fiveChangeIndex = changes.indexOf(5); 
                if(fiveChangeIndex == -1) return false 
                changes.splice(fiveChangeIndex, 1);
                changes.push(10);
                break;
            case 20:
                tenChangeIndex = changes.indexOf(10);
                fiveChangeIndex = changes.indexOf(5);
                // 10, 5 거슬러주는 경우
                if(tenChangeIndex !== -1 && fiveChangeIndex !== -1) {
                    changes.splice(tenChangeIndex, 1);
                    changes.splice(fiveChangeIndex, 1);
                    break;
                }
                // 5, 5, 5 거슬러 주는 경우
                if(changes.filter((v) => v === 5).length >=3) {
                     changes.splice(0,3); 
                    break;
                }
                
                return false;
                break;
            default:
                break;
        }
        changes.sort();
            
    }
    return true
    
};