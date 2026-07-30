# 🌍 EchoLang

> **Speak any language. Be heard in your own voice.**

EchoLang is an AI-powered multilingual speech translation platform that combines **speech recognition**, **neural machine translation**, and **voice cloning** into a single end-to-end pipeline.

Speak in your native language, translate it into another language, and hear the translated speech while preserving the speaker's vocal characteristics.

---

## ✨ Features

- 🎤 Speech-to-Text using OpenAI Whisper
- 🌍 Translation powered by Meta NLLB-200
- 🗣️ AI Voice Cloning using Chatterbox TTS
- ⚡ FastAPI backend with React frontend
- 🎧 Automatic translated speech playback
- 🔥 GPU-accelerated inference (CUDA supported)
- 🎨 Clean and modern user interface

---

## 🏗️ Architecture

```text
                 ┌───────────────┐
                 │ User Speech   │
                 └──────┬────────┘
                        │
                        ▼
             ┌────────────────────┐
             │ Whisper Speech-to-Text │
             └──────────┬─────────┘
                        │
                        ▼
              ┌───────────────────┐
              │ Meta NLLB-200     │
              │ Neural Translation│
              └──────────┬────────┘
                         │
                         ▼
             ┌────────────────────┐
             │ Chatterbox TTS     │
             │ Voice Cloning      │
             └──────────┬─────────┘
                        │
                        ▼
                🎧 Translated Speech
```

---

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- FastAPI
- Python
- PyTorch
- FFmpeg

### AI Models

- Whisper
- Meta NLLB-200
- Chatterbox TTS

---

# 📂 Project Structure

```
EchoLang/
│
├── frontend/          # React frontend
├── backend/           # FastAPI API
├── ai-services/       # Voice cloning service
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Sarvajeet99/EchoLang.git
cd EchoLang
```

---

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## AI Service

```bash
cd ai-services
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📸 Screenshots

<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/8d0718fb-4a56-486b-a6d1-4dc685f933a0" />
<img width="1908" height="946" alt="image" src="https://github.com/user-attachments/assets/3327df7e-ada7-46b5-923a-74a9cdc6fc65" />
<img width="1917" height="972" alt="image" src="https://github.com/user-attachments/assets/c09d012a-6f79-4980-a85d-0ba37ba871eb" />




### Landing Page

<p align="center">
<img src="screenshots/landing.png" width="900">
</p>

### Translator

<p align="center">
<img src="screenshots/translator.png" width="900">
</p>

---

# 🎯 Current Limitations

- Voice cloning quality depends on the selected language.
- Chatterbox provides the best results for English and some Latin-script languages.
- Multilingual voice synthesis is under active development.

---

# 🔮 Future Improvements

- Real-time streaming translation
- Live transcription
- Speaker diarization
- Translation history
- Download translated audio
- Noise suppression
- Better multilingual TTS
- Docker support
- Cloud deployment

---

# 💡 Motivation

EchoLang was built to explore the integration of modern AI models for multilingual communication.

Instead of relying on a single monolithic model, the system combines specialized models for speech recognition, translation, and speech synthesis to create a complete multilingual voice translation pipeline.

---

# 🤝 Contributing

Contributions, suggestions, and feature requests are welcome.

Feel free to open an issue or submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Sarvajeet Kale**

GitHub: https://github.com/Sarvajeet99

---

⭐ If you found this project interesting, consider giving it a star!
