import { Mic, Languages, Smile } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Mic,
    title: "Voice Cloning",
    description:
      "Your translated speech keeps the tone and characteristics of your own voice.",
  },
  {
    icon: Languages,
    title: "Real-Time Translation",
    description:
      "Translate conversations instantly with low latency across multiple languages.",
  },
  {
    icon: Smile,
    title: "Emotion Preservation",
    description:
      "Maintain emotion and natural speaking style during translation.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-black">
          Why <span className="text-violet-500">EchoLang?</span>
        </h2>

        <p className="mt-4 text-zinc-400">
          Built with state-of-the-art open-source AI models for seamless
          multilingual communication.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
             duration: 0.5,
             delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 50px rgba(139,92,246,0.25)",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  }}
  className="
    rounded-3xl
    border
    border-white/10
    hover:border-violet-500/40
    bg-white/5
    p-8
    backdrop-blur-xl
  "
>
    
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20">
                <Icon className="text-violet-400" size={28} />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;