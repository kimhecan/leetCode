/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const dp = JSON.parse(JSON.stringify(mat));
    const m = mat.length;
    const n = mat[0].length;
    
    for(let i=1; i<m; i++) {
        for(let j=0; j<n; j++) {
            dp[i][j] += dp[i-1][j];
        }
    }
    for(let i=0; i<m; i++) {
        for(let j=1; j<n; j++) {
            dp[i][j] += dp[i][j-1]
        }
    }
    // 1   3   6
    // 5  12  21
    // 12 27  45
    // 완성
    // 이걸로
    
    // 12 21 16
    // 27 45 33
    // 24 39 28
    // 이거 완성 해야함
    
    const result = JSON.parse(JSON.stringify(mat));
    
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            let a = i + k >= m ? m-1 : i + k;
            let b = j + k >= n ? n-1 : j + k;
            
            result[i][j] = dp[a][b];
            
            if(i > k) result[i][j] -= dp[i-k-1][b];
            if(j > k) result[i][j] -= dp[a][j-k-1];
            if(i > k && j > k) result[i][j] += dp[i-k-1][j-k-1];         
            
        }
    }
    return result;
    
    
};