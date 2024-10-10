'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { Header } from '@/app/components/Header'
import dynamic from 'next/dynamic'

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SuccessPage() {
  const [lang, setLang] = useState('pt-BR')
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [confettiRun, setConfettiRun] = useState(true)

  useEffect(() => {
    const lang = navigator.language || 'pt-BR'
    setLang(lang)

    const updateWindowDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)

    const confettiTimeout = setTimeout(() => setConfettiRun(false), 5000)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
      clearTimeout(confettiTimeout)
    }
  }, [])

  const t = lang === 'pt-BR' ? {
    title: 'Compra Realizada com Sucesso!',
    message: 'Obrigado por sua compra. Seu pedido foi processado com sucesso.',
    downloadButton: 'Baixar Agora',
    backButton: 'Voltar para a Página Inicial'
  } : {
    title: 'Purchase Successful!',
    message: 'Thank you for your purchase. Your order has been successfully processed.',
    downloadButton: 'Download Now',
    backButton: 'Back to Home Page'
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-black">
      <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={confettiRun ? 200 : 0}
        recycle={false}
      />
      <Header />
      <main className="flex-1 pt-16">
        <motion.section
          className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-blue-600/70" />
          <motion.div
            className="relative px-4 md:px-6 z-10"
            variants={fadeInUp}
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="mb-8 flex justify-center"
                variants={fadeInUp}
              >
                <CheckCircle className="w-24 h-24 text-green-400" />
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6"
                variants={fadeInUp}
              >
                {t.title}
              </motion.h1>
              <motion.p
                className="max-w-[600px] mx-auto text-xl text-blue-100 mb-8"
                variants={fadeInUp}
              >
                {t.message}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg px-8 py-3">
                  {t.downloadButton}
                </Button>
                <Link href="/">
                  <Button className="bg-blue-500 text-white hover:bg-blue-400 transition-colors text-lg px-8 py-3">
                    {t.backButton}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
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
  )
}