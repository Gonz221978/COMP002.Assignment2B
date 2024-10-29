// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

// Triangle pattern in console
let height = 4; // Maximum height

// Top half of the triangle (ascending)
for (let i = 1; i <= height; i++) {
  console.log("#".repeat(i));
}

// Bottom half of the triangle (descending)
for (let i = height - 1; i >= 1; i--) {
  console.log("#".repeat(i));
}