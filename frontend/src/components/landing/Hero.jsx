import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl text-7xl font-black leading-tight"
      >
        Speak Any Language.
        <br />

        <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          Keep Your Own Voice.
        </span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 max-w-2xl text-xl text-zinc-400"
      >
        Real-time multilingual communication powered by AI voice cloning,
        emotion preservation, and low-latency translation.
      </motion.p>

      <Link to="/translator">
       <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.15 }}
  className="
    mt-12
    cursor-pointer
    rounded-full
    bg-violet-600
    px-8
    py-4
    text-lg
    font-semibold
    text-white
    shadow-xl
    shadow-violet-600/30
    hover:bg-violet-500
    hover:shadow-violet-500/40
  "
>
  🚀 Start Talking
</motion.button>
      </Link>

    </section>
  );
}

export default Hero;