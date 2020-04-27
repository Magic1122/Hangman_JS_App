// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const gameEl = document.getElementById('game')
const remainingGuessesEl = document.getElementById('remaining-guesses')
let hangman1

/* gameEl.innerText = hangman1.getPuzzle
remainingGuessesEl.innerText = hangman1.getStatusMessage
console.log(hangman1.status) */

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    console.log(guess)
    hangman1.makeGuess(guess)
    render()
})

const render = () => {
    gameEl.innerHTML = ''
    remainingGuessesEl.innerText = hangman1.getStatusMessage
    const letters = hangman1.getPuzzle.split('')
    console.log(letters)
    letters.map((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        gameEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    console.log(puzzle)
    hangman1 = new Hangman(puzzle, 5)
    render()
}

document.getElementById('reset').addEventListener('click', startGame)

startGame()

