export const generateBingoCard = () => {
  const usedNumbers = new Set();
  const card = [];

  const getUniqueNumber = (min, max) => {
    let num;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.has(num));
    usedNumbers.add(num);
    return num;
  };

  const columnRanges = [
    [1, 15],   // B
    [16, 30],  // I
    [31, 45],  // N
    [46, 60],  // G
    [61, 75],  // O
  ];

  for (let row = 0; row < 5; row++) {
    const currentRow = [];
    for (let col = 0; col < 5; col++) {
      if (row === 2 && col === 2) {
        currentRow.push({ number: "FREE", marked: false });
      } else {
        const [min, max] = columnRanges[col];
        const number = getUniqueNumber(min, max);
        currentRow.push({ number, marked: false });
      }
    }
    card.push(currentRow);
  }

  return card;
};