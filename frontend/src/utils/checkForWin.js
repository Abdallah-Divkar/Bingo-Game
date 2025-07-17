export const checkForWin = (card) => {
    const size = 5;

    for (let row = 0; row < size; row++) {
        if (card[row].every(cell => cell.marked))
            return true;
    }

    for (let col = 0; col < size; col++) {
        if (card.every(row => row[col].marked))
            return true;
    } 
    
    if (card.every((row, i) => row[i].marked))
        return true;
    
    if (card.every((row, i) => row[size - 1 - i].marked))
        return true;
    
    return false;
}
        