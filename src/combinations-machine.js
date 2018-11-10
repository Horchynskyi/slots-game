
import { WIN_COMBINATIONS } from "../win-combinations";
import { framesOptions } from "./game-options";
import { utils } from './utils';

export const combinationMachine = {
  generateWinCombinationByIndex(index) {
    const combination = WIN_COMBINATIONS[index];
    const matrix = utils.sliceMatrix(combination.matrix);
    const winModel = utils.sliceMatrix(combination.matrix);
    const matrixWithoutZeros = this._getCorrectMatrixWithoutZeros(matrix, index);

    this.generateSymbolsForMatrix(matrixWithoutZeros, combination.randomized);
    this._addTwoOutOfVisibleRowsToMatrix(matrixWithoutZeros);

    return { 
      viewModel: utils.getTransposedMatrix(matrixWithoutZeros),
      winModel: utils.getTransposedMatrix(winModel),
      winAward: combination.winAward
    };
  },
  generateRandomWinCombination() {
    return this.generateWinCombinationByIndex(Math.floor(Math.random() * WIN_COMBINATIONS.length));
  },
  generateLoseCombination() {
    const startMatrix = Array(3).fill(Array(5).fill(0));
    const matrix = this._getCorrectMatrixWithoutZeros(startMatrix);

    const combination = this.generateSymbolsForMatrix(matrix);
    this._addTwoOutOfVisibleRowsToMatrix(combination);

    return { 
      viewModel: utils.getTransposedMatrix(combination),
      winModel: null
    };
  },
  generateSymbolsForMatrix(matrix, random = false) {
    let symbolsToUse = Object.values(framesOptions);

    if ( random ) {
      symbolsToUse = utils.getShuffledArray(symbolsToUse);
    }

    matrix.forEach((row) => {
      for ( let i = 0; i < row.length; i++ ) {
        if ( row[i] ) {
          if ( !symbolsToUse[row[i] - 1] ) {
            throw Error('Not enough frames in configuration.js');
          }

          row[i] = symbolsToUse[row[i] - 1];
        } else {
          row[i] = symbolsToUse[Math.floor(Math.random() * symbolsToUse.length)];
        }
      }
    });

    return matrix;
  },
  _getCorrectMatrixWithoutZeros(matrix, matrixIndex = -1, checker = 10) {
    const copy = utils.sliceMatrix(matrix);
    const winNumbersInMatrix = [];

    copy.forEach((row, i) => {
      if ( row[i] !== 0 && winNumbersInMatrix.indexOf[row[i]] !== -1 ) {
        winNumbersInMatrix.push(row[i]);
      }
    });

    copy.forEach((row) => {
      for ( let i = 0; i < row.length; i++ ) {
        if ( row[i] === 0 ) {
          row[i] = Math.ceil(Math.random() * framesOptions.framesAmount);
        }
      }
    });

    if ( !checker ) {
      throw Error('Issue with combination matrix (always same as another win combination)')
    }

    if ( this._checkMatrixIsAnotherWinCombination(copy, matrixIndex, winNumbersInMatrix) ) {
      return this._getCorrectMatrixWithoutZeros(matrix, matrixIndex, --checker);
    }

    return copy;
  },
  _checkMatrixIsAnotherWinCombination(matrix, matrixIndex, winNumbersInMatrix) {
    const allCombinations = WIN_COMBINATIONS.slice();

    if ( matrixIndex !== -1 ) {
      allCombinations.splice(matrixIndex, 1);
    }

    outer: for ( let i = 0; i < allCombinations.length; i++ ) {
      const combination = allCombinations[i];
      const winMatrix = combination.matrix;

      if ( combination.randomized ) {
        const numbersArrays = {
          win: [],
          current: []
        };

        for ( let i = 0; i < matrix.length; i++ ) {
          for ( let j = 0; j < matrix[i].length; j++ ) {
            if ( winMatrix[i][j] !== 0 ) {
              numbersArrays.win.push(winMatrix[i][j]);
              numbersArrays.current.push(matrix[i][j]);
            }
          }
        }

        const matrixForCompare = this._getMatrixWithSameNumbers(numbersArrays.win, numbersArrays.current, matrix);

        if ( !this._isMatrixesSameExceptZeros(winMatrix, matrixForCompare, winNumbersInMatrix) ) {
          continue outer;
        }
      } else {
        if ( !this._isMatrixesSameExceptZeros(winMatrix, matrix) ) {
          continue outer;
        }
      }
   
      return true;
    }

    return false;
  },
  _isMatrixesSameExceptZeros(a, b, winNumbersInSecond = []) {
    for ( let i = 0; i < a.length; i++ ) {
      for ( let j = 0; j < a[i].length; j++ ) {
        if ( a[i][j] === 0 ) {
          if ( winNumbersInSecond.indexOf(b[i][j]) !== -1 ) {
            return false;
          }
          continue;
        }
        if ( a[i][j] !== b[i][j] ) {
          return false;
        }
      }
    }

    return true;
  },
  _getMatrixWithSameNumbers(a, b, matrix) {
    const matrixCopy = utils.sliceMatrix(matrix);

    let numbersInFirst = {};
    let numbersInSecond = {};

    a.forEach((numb) => {
      if ( numb ) {
        numbersInFirst[numb] = true;
      }
    });

    b.forEach((numb) => {
      if ( numb ) {
        numbersInSecond[numb] = true;
      }
    });

    numbersInSecond = Object.keys(numbersInSecond);

    const numbersToChange = {};
    let i = 0;

    for ( let n in numbersInFirst ) {
      if ( !numbersInSecond[i] ) {
        break;
      }

      numbersToChange[numbersInSecond[i]] = +n;
      i++;
    }

    matrixCopy.forEach((row) => {
      for ( let i = 0; i < row.length; i++ ) {
        row[i] = numbersToChange[row[i]] || row[i];
      }
    });

    return matrixCopy;
  },
  _addTwoOutOfVisibleRowsToMatrix(matrix) {
    matrix.unshift(
      this.generateSymbolsForMatrix(this.__generateOneRowMatrix(), true)[0]
    );

    matrix.push(
      this.generateSymbolsForMatrix(this.__generateOneRowMatrix(), true)[0]
    );
  },
  __generateOneRowMatrix() {
    return Array(1).fill(Array(5).fill(0));
  }
};