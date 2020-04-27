class Hangman {
    constructor (word, remainingGuesses) {
    this.word = word.toLowerCase().split(''),
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses,
    this.status = 'playing'
    }
    get getPuzzle() {
  
    let puzzle = ''

    this.word.map((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
    }
    makeGuess(letter) {
        if (this.status === 'playing') {
            letter = letter.toLowerCase()
            const isUnique = !this.guessedLetters.includes(letter)
            const isBadGuess = !this.word.includes(letter)
            if (isUnique) {
                this.guessedLetters.push(letter)
            }
            if (isUnique && isBadGuess) {
                this.remainingGuesses--
            }
            this.calculateStatus()
        }
    }
    calculateStatus() {
        const finished = this.word.every((letter) => {          // if every single item in the array passes it returns true
            return this.guessedLetters.includes(letter) || letter === ' '
        })
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `Great work! You guessed the word.`
        }
    }

}
