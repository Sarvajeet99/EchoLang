from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import FileResponse
import tempfile
import os
import uuid

from app.services.tts import clone_voice

app = FastAPI(title="EchoLang AI Service")

OUTPUT_DIR = "app/outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)


@app.get("/")
def root():
    return {"status": "running"}


@app.post("/clone_voice")
async def clone(
    text: str = Form(...),
    file: UploadFile = File(...),
):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp:
        temp.write(await file.read())
        temp_path = temp.name

    output_file = os.path.join(
        OUTPUT_DIR,
        f"{uuid.uuid4()}.wav"
    )

    try:
        clone_voice(
            text=text,
            reference_audio=temp_path,
            output_path=output_file,
        )

        return FileResponse(
            output_file,
            media_type="audio/wav",
        )

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)