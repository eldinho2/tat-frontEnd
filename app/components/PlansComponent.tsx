import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { translations } from "@/app/translations";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function PlansComponent({ lang }: { lang: string }) {

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/checkout',
      },
    });
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <motion.div
      className="px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
        {t.plans.title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            {t.plans.free}
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            {t.plans.price.free}<span className="text-sm font-normal">/mês</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.freeFeatures.unlimitedTranslations}
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.freeFeatures.prioritySupport}
            </li>
          </ul>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            {t.plans.freeFeatures.checkout}
          </Button>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl border-2 border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            {t.plans.plus}
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            {t.plans.price.plus}<span className="text-sm font-normal">/mês</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.plusFeatures.unlimitedTranslations}
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.plusFeatures.prioritySupport}
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.plusFeatures.advancedFeatures}
            </li>
          </ul>
          <Button onClick={handleLogin} className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            {t.plans.choosePlan}
          </Button>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
            {t.plans.pro}
          </h3>
          <div className="text-center text-4xl font-bold mb-6 text-black">
            {t.plans.price.pro}
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.proFeatures.advancedFeatures}
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.proFeatures.prioritySupport}
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="text-green-500 mr-2" />
              {t.plans.proFeatures.unlimitedTranslations}
            </li>
          </ul>
          <Button onClick={handleLogin} className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              {t.plans.choosePlan}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
