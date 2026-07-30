import { useState } from "react";
import { languages } from "../data/languages";

import useRecorder from "../hooks/useRecorder";
import { transcribeAudio } from "../services/api";

import MicButton from "../components/translator/MicButton";
import LanguageSelector from "../components/translator/LanguageSelector";
import TranscriptCard from "../components/translator/TranscriptCard";
import TranslationCard from "../components/translator/TranslationCard";

export default function Translator() {
  const {
    isRecording,
    levels,
    startRecording,
    stopRecording,
  } = useRecorder();

  const [sourceLanguage, setSourceLanguage] = useState("eng_Latn");
  const [targetLanguage, setTargetLanguage] = useState("spa_Latn");

  const [transcript, setTranscript] = useState("");
  const [translation, setTranslation] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const handleMic = async () => {
    if (!isRecording) {
      await startRecording();
      return;
    }

    setLoading(true);

    try {
      const blob = await stopRecording();

      const result = await transcribeAudio(
        blob,
        sourceLanguage,
        targetLanguage
      );

      setTranscript(result.transcript);
      setTranslation(result.translation);
      setAudioUrl(result.audioUrl);

      // Automatically play translated speech
      if (result.audioUrl) {
        const audio = new Audio(result.audioUrl);
        audio.play().catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="mb-10 text-center text-5xl font-bold">
          AI Voice Translator
        </h1>

        <div className="mb-10 flex justify-center">
          <LanguageSelector
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            setSourceLanguage={setSourceLanguage}
            setTargetLanguage={setTargetLanguage}
          />
        </div>

        <div className="mb-14 flex justify-center">
          <MicButton
            isRecording={isRecording}
            levels={levels}
            loading={loading}
            onClick={handleMic}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <TranscriptCard transcript={transcript} />
          <TranslationCard translation={translation} />
        </div>

        {audioUrl && (
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-2xl rounded-xl bg-zinc-900 p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-center">
                🔊 Listen to Translation
              </h2>

              <audio
                controls
                autoPlay
                src={audioUrl}
                className="w-full"
              />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}