function TranscriptBox() {
  return (
    <div className="rounded-xl bg-slate-900 p-5 h-64">
      <h2 className="mb-3 text-xl font-semibold text-white">
        Transcript
      </h2>

      <p className="text-slate-400">
        Waiting for speech...
      </p>
    </div>
  );
}

export default TranscriptBox;