// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// Chessboard pattern
let size = 8; // Size of the chessboard

for (let row = 0; row < size; row++) {
  let line = ""; // Build the row pattern

  for (let col = 0; col < size; col++) {
    // Alternate between space and #
    if ((row + col) % 2 === 0) {
      line += "#";
    } else {
      line += " ";
    }
  }

  console.log(line);
}