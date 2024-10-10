"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { CreditCard, Banknote, QrCode, CheckIcon, AlertCircle, MountainIcon } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { translations } from "@/app/translations";
import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";
import HandleStripePayment from "@/app/components/HandleStripePayment";
import { getSession } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Session {
  user: {
    email: string;
  };
}

export default function CheckoutPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState("plus");
  const [session, setSession] = useState<Session | null>(null);
  const [lang, setLang] = useState('pt-BR');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const lang = navigator.language || 'pt-BR';
    setLang(lang);
  }, []);

  const t = translations[lang as keyof typeof translations] || translations.en;

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      setSession(session as Session | null);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
      if (!session?.user?.email) {
        router.push('/');
      }
    }
    checkSession()
  }, [router]);

  const plans = {
    plus: {
      name: "Plus",
      price: t.plans.price.plus,
      features: [
        t.plans.plusFeatures.unlimitedTranslations,
        t.plans.plusFeatures.prioritySupport,
        t.plans.plusFeatures.advancedFeatures,
      ],
    },
    pro: {
      name: "Pro",
      price: t.plans.price.pro,
      features: [
        t.plans.proFeatures.unlimitedTranslations,
        t.plans.proFeatures.prioritySupport,
        t.plans.proFeatures.advancedFeatures,
      ],
    },
  };

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
  };

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://tat-dev.vercel.app/checkout',
      },
    });
  };

  const handleLogout = () => {
    supabase.auth.signOut();
    setTimeout(() => {
      setLoading(true)
      handleLogin()
    }, 2000)
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : (
        <motion.div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-3xl font-bold tracking-tighter text-blue-600">
            {t.checkout.title}
            <MountainIcon className="h-8 w-8 text-blue-600" />
          </CardTitle>
          <CardDescription className="flex space-x-4">
            {t.checkout.description}
            <span className="font-medium px-1">{session?.user?.email}</span>
            <span onClick={handleLogout} className="flex items-center gap-1"> Logout <LogOut className="h-4 w-4" /></span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t.checkout.alert.title}</AlertTitle>
            <AlertDescription>
              {t.checkout.alert.description}
            </AlertDescription>
          </Alert>
          <div> 
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {t.checkout.selectYourPlan}
            </h3>
            <Select
              onValueChange={handlePlanChange}
              defaultValue={selectedPlan}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um plano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plus">Plus</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
          {lang === 'pt-BR' ? (
            <><h3 className="text-2xl font-bold mb-4 text-blue-600">
                {t.checkout.paymentMethod}
              </h3><RadioGroup defaultValue="pix">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex items-center space-x-2">
                      <QrCode className="h-4 w-4" />
                      <span>Pix</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Cartão de Crédito</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto" className="flex items-center space-x-2">
                      <Banknote className="h-4 w-4" />
                      <span>Boleto</span>
                    </Label>
                  </div>
                </RadioGroup></>
            ) : (
            null
            )}
          </div>
          <Separator />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {t.checkout.resumeOrder}
            </h3>
            <div className="flex flex-col  justify-center items-center max-h-[300px] p-6 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                {plans[selectedPlan as keyof typeof plans].name} 
              </h3>
              <div className="text-center text-4xl font-bold mb-6 text-black">
                {plans[selectedPlan as keyof typeof plans].price}
                <div className="text-center text-lg font-semibold mb-6 text-green-600">
                  {t.checkout.uniquePayment}
                </div>
              </div>
              <ul className="mb-8 space-y-4">
                {plans[selectedPlan as keyof typeof plans].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckIcon className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center items-center w-full">
          <HandleStripePayment 
            planId={selectedPlan} 
            planName={plans[selectedPlan as keyof typeof plans].name} 
            planPrice={parseFloat(plans[selectedPlan as keyof typeof plans].price)}
            text={t.checkout.confirmPurchase}
          />
        </CardFooter>
      </Card>
    </motion.div>
    )}
    </>
  );
}
