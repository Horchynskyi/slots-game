
export const utils = {
  sliceMatrix(matrix) {
    const newMatrix = [];

    matrix.forEach((row) => {
      newMatrix.push(row.slice());
    });

    return newMatrix;
  },
  getShuffledArray(a) {
    const copy = a.slice();

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },
  getTransposedMatrix: (b) => {
    const width = b[0].length;
    const height = b.length;
    const transposedMatrix = [];

    for ( let i = 0; i < width; i++ ) {
      transposedMatrix[i] = [];

      for ( let j = 0; j < height; j++ ) {
        transposedMatrix[i].push(b[j][i]);
      }
    }

    return transposedMatrix;
  },
};