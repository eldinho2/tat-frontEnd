"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MountainIcon, WindowsIcon, KeyboardIcon, ClipboardIcon, SettingsIcon } from "./utils/icons";
import { BrazilianPlans, InternationalPlans } from "./components/PlansComponent";
import { motion } from "framer-motion";
import { translations } from "./translations";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TranslatorLandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [enCurrency, setEnCurrency] = useState(false);
  const lang = navigator.language || 'pt-BR'
  console.log(lang);
  const t = translations[lang as keyof typeof translations] || translations.en;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-black">
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#features"
          >
            {t.features}
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#demo"
          >
            {t.demo}
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#pricing"
          >
            {t.pricing}
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#contact"
          >
            {t.contact}
          </Link>
        </nav>
      </motion.header>
      <main className="flex-1 pt-16">
        <motion.section
          className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-blue-600/70" />
          <motion.div
            className="relative px-4 md:px-6 z-10"
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6"
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
              >
                Tat.dev
              </motion.h1>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
                {t.heroTitle}
              </h1>
              <p className="max-w-[600px] mx-auto text-xl text-blue-100 mb-8">
                {t.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg px-8 py-3 flex items-center justify-center">
                  <WindowsIcon className="w-6 h-6 mr-2" />
                  {t.downloadButton}
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-400 transition-colors text-lg px-8 py-3">
                  {t.learnMoreButton}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          id="features"
          className="w-full py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <motion.div
            className="px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              {t.featuresTitle}
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <KeyboardIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  {t.featuresKeyboard}
                </h3>
                <p className="text-gray-600 text-center">
                  {t.featuresKeyboardDescription}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <ClipboardIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  {t.featuresClipboard}
                </h3>
                <p className="text-gray-600 text-center">
                  {t.featuresClipboardDescription}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <SettingsIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  {t.featuresCustomizable}
                </h3>
                <p className="text-gray-600 text-center">
                  {t.featuresCustomizableDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <section
          id="demo"
          className="w-full py-24 bg-gradient-to-b from-blue-50 to-white"
        >
          <motion.div
            className="px-4 md:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
                {t.demoTitle}
            </h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  layout="fill"
                  objectFit="cover"
                  alt={t.demoDescription}
                  className="transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <p className="mt-8 text-center text-xl text-gray-600">
                {t.demoDescription}
            </p>
          </motion.div>
        </section>
        <section className="w-full py-24 bg-white">
          <motion.div
            className="px-4 md:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
                {t.interfaceTitle}
            </h2>
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <Image
                  src="/Screenshot_2.png"
                  layout="fill"
                  objectFit="contain"
                  alt={t.interfaceDescription}
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <Image
                  src="/Screenshot_1.png"
                  layout="fill"
                  objectFit="contain"
                  alt={t.interfaceDescription}
                />
              </div>
            </div>
            <p className="mt-8 text-center text-xl text-gray-600">
                {t.interfaceDescription}
            </p>
          </motion.div>
        </section>
        <section
          id="pricing"
          className="w-full py-24 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto px-4 md:px-6">
          {lang === 'pt-BR' ? <BrazilianPlans /> : <InternationalPlans />}
          </div>
        </section>
        <section id="contact" className="relative w-full py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
            style={{
              transform: `translateY(${(scrollY - 4000) * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-sm" />
          <div className="relative px-4 md:px-6 z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
                {t.contactTitle}
            </h2>
            <form className="max-w-md mx-auto space-y-6">
              <Input placeholder="Nome" className="bg-white/90 border-white" />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/90 border-white"
              />
              <textarea
                className="w-full h-32 px-3 py-2 text-black bg-white/90 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mensagem"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg py-3"
              >
              {t.sendMessage}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 tatdev. {lang === 'pt-BR' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </p>
            <nav className="flex gap-6">
              <Link
                className="text-sm hover:text-blue-600 transition-colors"
                href="#"
              >
                {lang === 'pt-BR' ? 'Termos de Serviço' : 'Terms of Service'}
              </Link>
              <Link
                className="text-sm hover:text-blue-600 transition-colors"
                href="#"
              >
                {lang === 'pt-BR' ? 'Privacidade' : 'Privacy'}
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}