// 1 https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/
var findMin = function (nums) {
    return nums.sort((a, b) => a - b)[0];
};

// 3 https://leetcode.com/problems/number-of-islands/submissions/
var numIslands = function (grid) {
    let countIslands = 0;

    const crossCheckConnection = (i, ii) => {
        let arrI = [i];
        let arrII = [ii];
        const checkConnection = (i, ii) => {
            if (arrI.length === 0) {
                return
            }

            if (grid[i - 1] !== undefined && grid[i - 1][ii] === '1') {
                grid[i - 1][ii] = '0';
                arrI.push(i - 1);
                arrII.push(ii);
            }

            if (grid[i + 1] !== undefined && grid[i + 1][ii] === '1') {
                grid[i + 1][ii] = '0';
                arrI.push(i + 1);
                arrII.push(ii);
            }

            if (grid[i][ii - 1] !== undefined && grid[i][ii - 1] === '1') {
                grid[i][ii - 1] = '0';
                arrI.push(i);
                arrII.push(ii - 1);
            }

            if (grid[i][ii + 1] !== undefined && grid[i][ii + 1] === '1') {
                grid[i][ii + 1] = '0';
                arrI.push(i);
                arrII.push(ii + 1);
            }

            arrI.shift();
            arrII.shift();
            return checkConnection(arrI[0], arrII[0]);

        }
        checkConnection(arrI[0], arrII[0]);
    }
    for (let i = 0; i < grid.length; ++i) {
        for (let ii = 0; ii < grid[i].length; ++ii) {
            if (grid[i][ii] === '1') {
                grid[i][ii] = '0';
                crossCheckConnection(i, ii);
                ++countIslands;
            }
        }
    }


    return countIslands;
};
