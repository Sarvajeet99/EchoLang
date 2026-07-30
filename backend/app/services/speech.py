from faster_whisper import WhisperModel

model = WhisperModel(
    "medium",
    device="cuda",
    compute_type="float16"
)

LANGUAGE_MAP = {
    "eng_Latn": "en",
    "spa_Latn": "es",
    "fra_Latn": "fr",
    "deu_Latn": "de",
    "ita_Latn": "it",
    "por_Latn": "pt",
    "hin_Deva": "hi",
    "jpn_Jpan": "ja",
    "kor_Hang": "ko",
    "zho_Hans": "zh",
}

def transcribe(audio_path, source_language):
    whisper_lang = LANGUAGE_MAP.get(source_language)

    segments, info = model.transcribe(
        audio_path,
        language=whisper_lang,
        beam_size=5,
    )

    # 👇 Add these lines here
    print("Detected language:", info.language)
    print("Language confidence:", info.language_probability)

    text = " ".join(segment.text.strip() for segment in segments)

    print("Transcript:", text)

    return text