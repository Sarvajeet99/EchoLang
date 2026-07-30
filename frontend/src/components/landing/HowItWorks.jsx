import {
  Mic,
  FileText,
  Languages,
  AudioWaveform,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Mic,
    title: "Speak",
    desc: "Talk naturally into your microphone.",
  },
  {
    icon: FileText,
    title: "Transcribe",
    desc: "Whisper converts speech into highly accurate text.",
  },
  {
    icon: Languages,
    title: "Translate",
    desc: "NLLB translates your message into the target language.",
  },
  {
    icon: AudioWaveform,
    title: "Clone Voice",
    desc: "XTTS recreates your voice in another language.",
  },
  {
    icon: Headphones,
    title: "Listen",
    desc: "Hear the translated speech with your own voice.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black">
          How It <span className="text-violet-500">Works</span>
        </h2>

        <p className="mt-4 text-zinc-400">
          Powered by modern open-source AI models.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-600/20">
                <Icon className="text-violet-400" size={30} />
              </div>

              <h3 className="mb-2 text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-sm text-zinc-400">
                {step.desc}
              </p>

              {index !== steps.length - 1 && (
             <motion.div
  animate={{
    x: [0, 6, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    left-full
    top-8
    hidden
    -translate-x-5
    md:block
  "
>
  <ArrowRight
    size={22}
    className="text-violet-500"
  />
</motion.div>
)}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}