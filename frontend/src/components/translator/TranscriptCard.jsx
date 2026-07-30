export default function TranscriptCard({ transcript }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-4 text-xl font-bold">
        Live Transcript
      </h2>

      <p className="whitespace-pre-wrap text-zinc-200">
        {transcript || "Waiting for speech..."}
      </p>
    </div>
  );
}