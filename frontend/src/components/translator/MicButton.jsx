import { Mic, Square } from "lucide-react";
import { motion } from "framer-motion";

export default function MicButton({
  isRecording,
  levels = [],
  loading,
  onClick,
}) {
  return (
    <div className="flex flex-col items-center">

      {/* Microphone Area */}
      <div className="relative flex h-52 w-52 items-center justify-center">

        {/* Pulse Rings */}
        {isRecording && !loading && (
          <>
            <motion.div
              className="absolute h-32 w-32 rounded-full border-2 border-violet-500"
              animate={{
                scale: [1, 2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="absolute h-32 w-32 rounded-full border-2 border-fuchsia-500"
              animate={{
                scale: [1, 2.4],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.8,
                delay: 0.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="absolute h-32 w-32 rounded-full bg-violet-600/20 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </>
        )}

        {/* Button */}
        <motion.button
          disabled={loading}
          onClick={onClick}
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          animate={
            isRecording && !loading
              ? {
                  scale: [1, 1.06, 1],
                }
              : {}
          }
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className={`
            relative
            z-10
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            shadow-2xl
            transition-all
            duration-300
            ${
              loading
                ? "bg-zinc-700 cursor-not-allowed"
                : isRecording
                ? "bg-red-600 cursor-pointer"
                : "bg-gradient-to-r from-violet-600 to-fuchsia-600 cursor-pointer"
            }
          `}
        >
          {loading ? (
            <motion.div
              className="h-10 w-10 rounded-full border-4 border-white border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
          ) : isRecording ? (
            <Square size={42} color="white" />
          ) : (
            <Mic size={48} color="white" />
          )}
        </motion.button>
      </div>

      {/* Waveform */}
      {(isRecording || loading) && (
        <div className="mt-2 flex h-20 items-end justify-center gap-1">
          {levels.map((height, index) => (
            <motion.div
              key={index}
              animate={{
                height: Math.max(10, height),
              }}
              transition={{
                duration: 0.08,
                ease: "easeOut",
              }}
              className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 via-violet-400 to-fuchsia-300"
            />
          ))}
        </div>
      )}

      {/* Status */}
      <motion.p
        className="mt-5 text-lg text-zinc-400"
        animate={
          loading || isRecording
            ? {
                opacity: [0.4, 1, 0.4],
              }
            : {}
        }
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        {loading
          ? "Translating..."
          : isRecording
          ? "Listening..."
          : "Tap to Speak"}
      </motion.p>

    </div>
  );
}