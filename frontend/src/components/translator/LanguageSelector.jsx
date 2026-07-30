import { ArrowLeftRight } from "lucide-react";
import { languages } from "../../data/languages";

export default function LanguageSelector({
  sourceLanguage,
  targetLanguage,
  setSourceLanguage,
  setTargetLanguage,
}) {

  const swapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  return (
    <div className="mb-10 flex items-center justify-center gap-4">

      <select
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
        className="
          rounded-xl
          border
          border-white/10
          bg-zinc-900
          px-5
          py-3
          text-white
          outline-none
        "
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-zinc-900 text-white"
          >
            {lang.name}
          </option>
        ))}
      </select>

      <button
        onClick={swapLanguages}
        className="
          rounded-full
          border
          border-white/10
          bg-white/5
          p-3
          transition
          hover:rotate-180
          hover:border-violet-500
        "
      >
        <ArrowLeftRight />
      </button>

      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        className="
          rounded-xl
          border
          border-white/10
          bg-zinc-900
          px-5
          py-3
          text-white
          outline-none
        "
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-zinc-900 text-white"
          >
            {lang.name}
          </option>
        ))}
      </select>

    </div>
  );
}