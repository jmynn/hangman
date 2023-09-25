const isIdenticalSetsOfLetters = (currentWord: string, guessedLetters: Set<string>): boolean  => {
    const jsonLettersUsed = JSON.stringify(Array.from(new Set(currentWord)).sort())
    const jsonGuessedLetters = JSON.stringify(Array.from(guessedLetters).sort())
    return jsonLettersUsed === jsonGuessedLetters
}

export default isIdenticalSetsOfLetters