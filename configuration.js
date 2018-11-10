
export const configuration = {
  "winChance": {
    "value": 0.7,
    "description": "Sets the percent of win ( from 0 to 1 )."
  },
  "definedStartWinCombinations": {
    "value": [1],
    "description": `Sets combinations by indexes of array that defined in win-combinations.js. 
                    After their end, will be used random combinations depend on chance of win.`
  },
  "startModel": {
    "value": 
    [
      [0, 0, 0, 0, 0],
      [1, 5, 3, 4, 2],
      [3, 2, 4, 1, 1],
      [1, 4, 2, 4, 5],
      [0, 0, 0, 0, 0]
    ],
    "description": "Sets start slots model. Top and bottom out of vision. false - will be generated random."
  },
  "framesOptions": {
    "value": {
      1: {
        1: 'highwin_bell.png',
        2: 'highwin_cherry.png',
        3: 'highwin_diamond.png',
        4: 'highwin_lemon.png',
        5: 'highwin_seven.png'
      },
      2: {
        1: 'lowwin_club.png',
        2: 'lowwin_star.png',
        3: 'lowwin_spade.png',
        4: 'lowwin_heart.png',
        5: 'lowwin_diamond.png'
      }
    }[1],
    "description": `Sets symbols that will exchange numbers in combinations. 
                    Change the number in brackets to change the pack of symbols. 
                    "WILD" will be added automatically as additional number.`
  }
}