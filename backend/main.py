from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import tempfile
import os
import uuid
import shutil
import requests

from app.services.speech import transcribe
from app.services.translator import translate

app = FastAPI(title="EchoLang API")

AUDIO_DIR = "generated_audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "EchoLang API is running!"}


@app.post("/transcribe")
async def transcribe_endpoint(
    file: UploadFile = File(...),
    source: str = Form(...),
    target: str = Form(...)
):
    # Save uploaded voice temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp:
     temp.write(await file.read())
     temp_path = temp.name
      
    try:
        # Whisper
        transcript = transcribe(
            audio_path=temp_path,
            source_language=source
        )

        # NLLB
        translation = translate(
            text=transcript,
            source=source,
            target=target
        )

        # Voice Cloning
        with open(temp_path, "rb") as voice_file:

            response = requests.post(
                "http://127.0.0.1:8001/clone_voice",
                files={
                    "file": voice_file
                },
                data={
                    "text": translation
                }
            )

        if response.status_code != 200:
            return {
                "error": "Voice cloning failed."
            }

        filename = f"{uuid.uuid4()}.wav"

        filepath = os.path.join(AUDIO_DIR, filename)

        with open(filepath, "wb") as f:
            f.write(response.content)

        return {
            "transcript": transcript,
            "translation": translation,
            "audioUrl": f"http://localhost:8000/audio/{filename}"
        }

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)


@app.get("/audio/{filename}")
async def get_audio(filename: str):
    path = os.path.join(AUDIO_DIR, filename)

    from fastapi.responses import FileResponse

    return FileResponse(
        path,
        media_type="audio/wav"
    )