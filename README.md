# 🎱 Bingo Game

A simple interactive Bingo number drawer built with a Python (Flask) backend and a web frontend.

This is **Version 1** of the project, featuring a random Bingo number generator that draws numbers uniquely and displays them on the UI with a “Draw” button.

---

## ✨ Features

- Random Bingo number generation in the format `B5`, `O74`, `I20`, etc.
- Each number is drawn only once per game session.
- Frontend displays the current drawn number.
- History display of all previously drawn numbers.
- Simple, clean UI with visual Bingo balls.

---

## 🛠 Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Communication:** REST API (`/draw` endpoint returns JSON)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Python 3.8+
- Flask (`pip install flask`)

---

### ▶️ Run the Backend Server

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The server will run at:  
**`http://localhost:5000`**

---

### 🌐 Open the Frontend

Simply open `frontend/index.html` in your browser.

---

## 🎮 How to Play

1. Click the **“Draw”** button on the webpage.
2. The **latest Bingo number** will be shown prominently.
3. All **previously drawn numbers** will appear below as visual Bingo balls.
4. Continue drawing until all 75 numbers are called.

---

## 🗺️ Roadmap

- [x] **Version 1** – Unique random Bingo number drawer + frontend UI  
- [ ] **Version 2** – Bingo card generation and match detection  
- [ ] **Version 3** – Multiplayer support with real-time sync  
- [ ] **Version 4** – Robot players (AI opponents)  
- [ ] **Version 5** – User accounts and scoreboard  
- [ ] **Version 6** – UI polish, animations, mobile support

---

## 🤝 Contributing

- Open issues or submit pull requests!
- Follow clean code practices and add comments/tests where possible.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Created by:** *[Your Name]*  
**Email:** *your.email@example.com*  
**GitHub:** [https://github.com/your-username](https://github.com/your-username)
