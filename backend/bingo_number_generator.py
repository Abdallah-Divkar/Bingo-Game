import numpy as np
from numpy import random

'''bingo_numbers_arr = np.array(['B-1', 'B-2', 'B-3', 'B-4', 'B-5', 'B-6', 'B-7', 'B-8', 'B-9', 'B-10', 'B-11', 'B-12', 'B-13', 'B-14', 'B-15'
                                'I-16', 'I-18', 'I-19', 'I-20', 'I-21', 'I-22', 'I-23', 'I-24', 'I-25', 'I-26', 'I-27'
                              
                              
                              ])'''
bingo_numbers_list = []
letters = ["B", "I", "N", "G", "O"]

for i, letter in enumerate(letters):
    start = i * 15 + 1
    end = start + 15
    for num in range(start, end):
        bingo_numbers_list.append(f"{letter}-{num}")

bingo_numbers_arr = np.array(bingo_numbers_list)
#print(bingo_numbers_arr)


called_numbers = []

i = 0
while i < 75:
    x = random.choice(bingo_numbers_arr)

    if x in called_numbers:
        continue
    else:
        called_numbers.append(x)
        print(x)
        print(f"Numbers called: {called_numbers}")
        i += 1
    input("Press Enter to draw the next number...")
