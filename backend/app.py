from flask import Flask, jsonify, Response, render_template, request
from flask_cors import CORS
import numpy as np
from numpy import random

# Flask initialization
app = Flask(__name__)
CORS(app)
#Global variables
letters = ["B", "I", "N", "G", "O"]
bingo_numbers_list = [f"{letters[i]}-{num}" for i in range(5) for num in range(i * 15 + 1, i * 15 + 16)]
bingo_numbers_arr = np.array(bingo_numbers_list)
called_numbers = []

# Routes
@app.route('/draw', methods=['GET'])
def draw():
    if len(called_numbers) >= 75:
        return jsonify({
            "message": "All numbers have been drawn!",
            "current_drawn_number": None,
            "all_drawn_numbers": called_numbers
        })

    # Draw until a unique number is found
    while True:
        x = random.choice(bingo_numbers_arr)
        if x not in called_numbers:
            called_numbers.append(x)
            break

    return jsonify({
        "current_drawn_number": x,
        "all_drawn_numbers": called_numbers
    })

if __name__ == '__main__':
    app.run(debug=True)
