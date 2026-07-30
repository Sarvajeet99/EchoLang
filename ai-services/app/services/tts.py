from chatterbox.tts import ChatterboxTTS
from pydub import AudioSegment
import torch
import soundfile as sf
import tempfile
import os

device = "cuda" if torch.cuda.is_available() else "cpu"

print("Loading Chatterbox model...")
model = ChatterboxTTS.from_pretrained(device=device)
print("✅ Chatterbox model ready!")


def clone_voice(text: str, reference_audio: str, output_path: str):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # Convert browser recording (WebM/MP3/M4A/WAV) to WAV
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_wav:
        wav_path = temp_wav.name

    AudioSegment.from_file(reference_audio).export(
        wav_path,
        format="wav"
    )

    try:
        audio = model.generate(
            text=text,
            audio_prompt_path=wav_path,
        )

        audio = audio.squeeze(0).detach().cpu().numpy()

        sf.write(
            output_path,
            audio,
            samplerate=model.sr,
            format="WAV",
        )

    finally:
        if os.path.exists(wav_path):
            os.remove(wav_path)

    return output_path