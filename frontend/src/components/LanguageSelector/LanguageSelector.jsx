function LanguageSelector() {
  return (
   <div className="flex gap-4 mb-8">

    <select
        value={sourceLanguage}
        onChange={(e)=>setSourceLanguage(e.target.value)}
        className="bg-zinc-900 border border-violet-600 rounded-lg p-3 w-full"
    >

        {languages.map(lang=>(
            <option
                key={lang.code}
                value={lang.code}
            >
                {lang.name}
            </option>
        ))}

    </select>


    <select
        value={targetLanguage}
        onChange={(e)=>setTargetLanguage(e.target.value)}
        className="bg-zinc-900 border border-violet-600 rounded-lg p-3 w-full"
    >

        {languages.map(lang=>(
            <option
                key={lang.code}
                value={lang.code}
            >
                {lang.name}
            </option>
        ))}

    </select>

</div>
  );
}

export default LanguageSelector;