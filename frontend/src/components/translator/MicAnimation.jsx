import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function MicAnimation({ recording }) {
  return (
    <div className="relative flex flex-col items-center justify-center">

      {/* Ring 1 */}
      {recording && (
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-violet-500"
          animate={{
            scale: [1, 1.7],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}

      {/* Ring 2 */}
      {recording && (
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-fuchsia-500"
          animate={{
            scale: [1, 2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.6,
            repeat: Infinity,
          }}
        />
      )}

      {/* Glow */}
      <motion.div
        animate={
          recording
            ? {
                boxShadow: [
                  "0 0 20px #7c3aed",
                  "0 0 45px #a855f7",
                  "0 0 20px #7c3aed",
                ],
              }
            : {}
        }
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-violet-600"
      >
        <Mic size={34} color="white" />
      </motion.div>

      {/* Wave Bars */}
      {recording && (
        <div className="mt-8 flex items-end gap-1">
          {[18, 32, 22, 40, 24, 34, 18].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded bg-violet-500"
              animate={{
                height: [10, h, 12],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      )}

      <motion.p
        className="mt-6 text-zinc-400"
        animate={
          recording
            ? {
                opacity: [0.5, 1, 0.5],
              }
            : {}
        }
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        {recording ? "Listening..." : "Tap to Speak"}
      </motion.p>

    </div>
  );
}