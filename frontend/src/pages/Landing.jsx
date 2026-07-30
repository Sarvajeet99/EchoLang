import Header from "../components/layout/Header";
import Hero from "../components/landing/Hero";
import { useTheme } from "../providers/ThemeProvider";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";

function Landing() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#09090B] text-white"
          : "bg-[#FFFDF5] text-black"
      }`}
    >
      <Header />

      <Hero />
      <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default Landing;