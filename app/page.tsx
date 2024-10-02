"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MountainIcon } from "./utils/icons";
import { WindowsIcon } from "./utils/icons";
import { KeyboardIcon } from "./utils/icons";
import { ClipboardIcon } from "./utils/icons";
import { CheckIcon } from "./utils/icons";
import { SettingsIcon } from "./utils/icons";


export default function TranslatorLandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-black">
      <header className="fixed w-full px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-md z-50 transition-all duration-300 ease-in-out shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">
            Tradutor Instantâneo
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#demo"
          >
            Demonstração
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#pricing"
          >
            Preços
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#contact"
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-blue-600/70" />
          <div className="relative px-4 md:px-6 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
                Traduza enquanto você digita
              </h1>
              <p className="max-w-[600px] mx-auto text-xl text-blue-100 mb-8">
                Tradutor desktop revoluciona a forma como você trabalha com
                idiomas. Tradução instantânea com apenas um atalho de teclado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg px-8 py-3 flex items-center justify-center">
                  <WindowsIcon className="w-6 h-6 mr-2" />
                  Download para Windows
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-400 transition-colors text-lg px-8 py-3">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-24 bg-white">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Recursos Principais
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <KeyboardIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  Tradução com Atalhos
                </h3>
                <p className="text-gray-600 text-center">
                  Use Ctrl+A para copiar e Ctrl+Shift+T para traduzir
                  instantaneamente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <ClipboardIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  Integração com Clipboard
                </h3>
                <p className="text-gray-600 text-center">
                  Tradução automática enviada diretamente para sua área de
                  transferência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <SettingsIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600 text-center">
                  Personalizável
                </h3>
                <p className="text-gray-600 text-center">
                  Configure idiomas, modo escuro e mecanismo de tradução
                  conforme sua preferência.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="demo"
          className="w-full py-24 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Veja como funciona
            </h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  layout="fill"
                  objectFit="cover"
                  alt="GIF demonstrando o Tradutor Instantâneo em ação"
                  className="transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <p className="mt-8 text-center text-xl text-gray-600">
              Tradução instantânea enquanto você digita. Simples, rápido e
              eficiente.
            </p>
          </div>
        </section>
        <section className="w-full py-24 bg-white">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Interface Intuitiva
            </h2>
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  layout="fill"
                  objectFit="cover"
                  alt="Interface do Tradutor Instantâneo - Modo Claro"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  layout="fill"
                  objectFit="cover"
                  alt="Interface do Tradutor Instantâneo - Modo Escuro"
                />
              </div>
            </div>
            <p className="mt-8 text-center text-xl text-gray-600">
              Design moderno e funcional, com suporte para modo claro e escuro.
            </p>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-24 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Planos e Preços
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
              <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                  Básico
                </h3>
                <div className="text-center text-4xl font-bold mb-6 text-black">
                  R$19,90<span className="text-sm font-normal">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 flex-grow">
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Até 1000 traduções por mês
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Suporte por email
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                  Escolher Plano
                </Button>
              </div>
              <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl border-2 border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                  Plus
                </h3>
                <div className="text-center text-4xl font-bold mb-6 text-black">
                  R$39,90<span className="text-sm font-normal">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 flex-grow">
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Traduções ilimitadas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Suporte prioritário
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Acesso a recursos avançados
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                  Escolher Plano
                </Button>
              </div>
              <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                  Pro
                </h3>
                <div className="text-center text-4xl font-bold mb-6 text-black">
                  Personalizado
                </div>
                <ul className="mb-8 space-y-4 flex-grow">
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Soluções personalizadas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Suporte dedicado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    Integração com sistemas existentes
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                  Contate-nos
                </Button>
              </div>
            </div>
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
              Entre em Contato
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
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 TaT Todos os direitos reservados.
            </p>
            <nav className="flex gap-6">
              <Link
                className="text-sm hover:text-blue-600 transition-colors"
                href="#"
              >
                Termos de Serviço
              </Link>
              <Link
                className="text-sm hover:text-blue-600 transition-colors"
                href="#"
              >
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}