const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTII = [
  {
    nume: 'piatra',
    emoji: '✊',
    bate: 'foarfeca'
  },

  {
    nume: 'foarfeca',
    emoji: '✌',
    bate: 'hartie'
  },

    {
    nume: 'hartie',
    emoji: '✋',
    bate: 'piatra'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionNume = selectionButton.dataset.selection
    const selection = SELECTII.find(selection => selection.nume === selectionNume)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.bate === opponentSelection.nume
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTII.length)
  return SELECTII[randomIndex]
}