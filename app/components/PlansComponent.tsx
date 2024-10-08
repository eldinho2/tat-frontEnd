import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function BrazilianPlans() {
  return (
    <motion.div
      className="px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
        Planos e Preços
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Gratuito
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            R$00,00<span className="text-sm font-normal">/mês</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Até 5 traduções por hora
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
    </motion.div>
  );
}

export function InternationalPlans() {
  return (
    <motion.div
      className="px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
        Plans and Prices
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Free
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            $00,00<span className="text-sm font-normal">/month</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Up to 5 translations per hour
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Email support
            </li>
          </ul>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            Choose Plan
          </Button>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl border-2 border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Plus
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            $39,90<span className="text-sm font-normal">/month</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Unlimited translations
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Priority support
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Access to advanced features
            </li>
          </ul>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            Choose Plan
          </Button>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Pro
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            Customized
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Customized solutions
            </li>
            <li className="flex items-center text-gray-600">  
              <CheckIcon className="text-green-500 mr-2" />
              Dedicated support
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              Integration with existing systems
            </li>
          </ul>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
