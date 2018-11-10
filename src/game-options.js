
import { configuration } from './../configuration';

import { utils } from './utils';
import { combinationMachine } from './combinations-machine';

const framesOptions = configuration.framesOptions.value;
Object.defineProperty(framesOptions, 'framesAmount', {
  value: Object.keys(framesOptions).length,
  enumerable: false
});

framesOptions[framesOptions.framesAmount + 1] = 'wild.png';

let startModel;
if ( !configuration.startModel.value ) {
  startModel = combinationMachine.generateLoseCombination().viewModel;
} else {
  startModel = utils.getTransposedMatrix(
    combinationMachine.generateSymbolsForMatrix(utils.sliceMatrix(configuration.startModel.value))
  );
}

export const START_WIN_COMBINATIONS = configuration.definedStartWinCombinations.value.slice().map((index) => {
  return combinationMachine.generateWinCombinationByIndex(index);
});
export const START_REELS_VIEW = startModel;
export { framesOptions };
export const winChance = configuration.winChance;

// Tester

// let i = 10000;
// while(--i) {
//   combinationMachine.generateLoseCombination();
//   combinationMachine.generateRandomWinCombination();
// }