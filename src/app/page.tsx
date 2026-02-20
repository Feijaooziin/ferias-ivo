"use client";
import { Countdown } from "@/components/countdown";
import { motion, Variants } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const footerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.6,
      },
    },
  };

  const footerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col bg-linear-to-b from-black via-zinc-900 to-black text-white">
      <motion.section
        className="flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-4xl 
            leading-tight
            font-extrabold
            px-4
            sm:text-5xl
            mt-8
          "
        >
          CONTAGEM PARA AS
          <br />
          FÉRIAS DO IVO 🎆
        </motion.h1>

        <Countdown />
      </motion.section>

      <motion.footer
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex-1 mt-8 px-6 py-8 text-center text-xl leading-relaxed text-zinc-400 space-y-4"
      >
        <motion.h1
          variants={footerItem}
          className="text-3xl font-bold text-zinc-200"
        >
          Calma lá meu Cupinxa,
          <br />
          Tá chegando!
        </motion.h1>

        <motion.p variants={footerItem}>
          Segura a emoção e prepara o golfão pra viajar com a família.
        </motion.p>

        <motion.p variants={footerItem}>
          Patrocínio "EMERGENT COLD LATAM".
        </motion.p>

        <motion.button
          variants={footerItem}
          className="cursor-pointer px-6 py-3 mt-12 bg-linear-to-r from-[#30db6c] to-[#03531f] rounded-full text-white font-semibold hover:from-[#1aa34a] hover:to-[#1db954] transition-colors duration-300"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/1BjqLfj4bFIfDfcbscv78a?si=8gC6qYuLRYmsVmFcUabYaw&pi=FU3jv5YyR-CwS",
              "_blank",
            )
          }
        >
          <SocialIcon
            url="https://open.spotify.com/playlist/1BjqLfj4bFIfDfcbscv78a?si=8gC6qYuLRYmsVmFcUabYaw&pi=FU3jv5YyR-CwS"
            style={{ height: 32, width: 32, marginRight: 8 }}
            target="_blank"
          />
          Playlist de Viagem
        </motion.button>
      </motion.footer>
    </main>
  );
}
