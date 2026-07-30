import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function TranslationCard({
  translation,
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!translation) return;

    await navigator.clipboard.writeText(translation);

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 shadow-lg">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Translation
        </h2>

        <button
          onClick={copy}
          disabled={!translation}
          className="
            rounded-lg
            bg-violet-600
            px-3
            py-2
            transition
            hover:bg-violet-500
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          {copied ? (
            <Check size={18} />
          ) : (
            <Copy size={18} />
          )}
        </button>

      </div>

      <p className="min-h-[140px] whitespace-pre-wrap text-zinc-300">
        {translation || "Translation will appear here..."}
      </p>

    </div>
  );
}