import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-10
        w-16
        items-center
        rounded-full
        bg-zinc-800
        p-1
        transition-colors
        dark:bg-zinc-700
      "
    >
      <motion.div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
        "
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <Moon size={16} className="text-violet-600" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;