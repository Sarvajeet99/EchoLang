import { motion } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            EchoLang
          </span>
        </h1>

        <nav className="hidden gap-10 text-sm text-zinc-400 md:flex">

          <button className="hover:text-violet-500 transition">
            Features
          </button>

          <button className="hover:text-violet-500 transition">
            Docs
          </button>

          <button className="hover:text-violet-500 transition">
            GitHub
          </button>

        </nav>

        <div className="flex items-center gap-5">

          <ThemeToggle />
           <Link
             to="/translator"
             className="
             rounded-full
             bg-violet-600
             px-5
             py-2
             text-white
             transition
             hover:bg-violet-500
                              "
                  >
                   Launch
           </Link>

        </div>

      </div>
    </motion.header>
  );
}

export default Header;