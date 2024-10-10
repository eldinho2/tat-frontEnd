"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MountainIcon } from "../utils/icons";
import { motion } from "framer-motion";
import { translations } from "../translations";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('pt-BR');

  useEffect(() => {
    const lang = navigator.language || 'pt-BR';
    setLang(lang);
  }, []);

  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <motion.header
      className="fixed w-full px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-md z-50 transition-all duration-300 ease-in-out shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-blue-600">Tat.dev</span>
      </Link>
      <nav className={`ml-auto ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 gap-4 sm:gap-6`}>
        <Link
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          href="#features"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.features}
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          href="#demo"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.demo}
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          href="#pricing"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.pricing}
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.contact}
        </Link>
      </nav>
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </motion.header>
  );
}