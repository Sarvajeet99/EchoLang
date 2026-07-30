import Header from "../components/Header/Header";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import TranscriptBox from "../components/TranscriptBox/TranscriptBox";
import TranslationBox from "../components/TranslationBox/TranslationBox";
import MicButton from "../components/MicButton/MicButton";
import StatusBar from "../components/StatusBar/StatusBar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Header />

      <div className="mx-auto max-w-6xl p-8">

        <div className="mb-8 flex justify-center">
          <LanguageSelector />
        </div>

        <div className="grid grid-cols-2 gap-6">

          <TranscriptBox />

          <TranslationBox />

        </div>

        <div className="my-10 flex justify-center">
          <MicButton />
        </div>

        <StatusBar />

      </div>

    </div>
  );
}

export default Home;