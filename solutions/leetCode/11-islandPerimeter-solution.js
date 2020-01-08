/* https://leetcode.com/problems/island-perimeter/ #463

You are given a map in form of a two-dimensional integer grid where 1 represents
land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded
by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
Determine the perimeter of the island.

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

(visual on the leetcode website linked above if you need additional info)

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) {
        if (grid[i - 1] === undefined || grid[i - 1][j] === 0) {
          perimeter += 1;
        }

        if (grid[i][j + 1] === undefined || grid[i][j + 1] === 0) {
          perimeter += 1;
        }

        if (grid[i + 1] === undefined || grid[i + 1][j] === 0) {
          perimeter += 1;
        }

        if (grid[i][j - 1] === undefined || grid[i][j - 1] === 0) {
          perimeter += 1;
        }
      }
    }
  }

  return perimeter;
};

/* Alternate syntax, same concept solution:

const islandPerimeter = function (grid) {
  let perimeter = 0;

  grid.forEach((innerArray, i) => {
    innerArray.forEach((tile, k) => {
      if (tile === 1) {
        if (i === 0 || grid[i - 1][k] !== 1) {
          perimeter += 1;
        }
        if (k === innerArray.length - 1 || grid[i][k + 1] !== 1) {
          perimeter += 1;
        }
        if (i === grid.length - 1 || grid[i + 1][k] !== 1) {
          perimeter += 1;
        }
        if (k === 0 || grid[i][k - 1] !== 1) {
          perimeter += 1;
        }
      }
    });
  });

  return perimeter;
};

*/

const sampleArrays = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(sampleArrays));
