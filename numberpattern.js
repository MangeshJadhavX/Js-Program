function printInvertedHalfPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + ' ';
      }
      console.log(row);
    }
  }
  
  // Change the number of rows as needed
  const numberOfRows = 5;
  printInvertedHalfPyramid(numberOfRows);