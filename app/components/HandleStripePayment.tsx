import { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

interface HandleStripePaymentProps {
  planId: string;
  planName: string;
  planPrice: number;
  text: string;
}

export const HandleStripePayment: React.FC<HandleStripePaymentProps> = ({ planName, text }) => {
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    try {
      setLoading(true);
      const checkoutResponse = await fetch("/api/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ testeId: '123', product: planName }),
      });

      if (!checkoutResponse.ok) {
        const errorData = await checkoutResponse.json();
        throw new Error(`HTTP error! status: ${checkoutResponse.status}, message: ${errorData.message}`);
      }

      const { sessionId } = await checkoutResponse.json();

      const stripeClient = await loadStripe(
        process.env.STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripeClient) throw new Error("Stripe falhou ao inicializar.");

      const { error } = await stripeClient.redirectToCheckout({ sessionId });
      if (error) throw error;
    } catch (error) {
      console.error("Erro durante o pagamento:", error);
      alert(`Erro durante o pagamento: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="flex justify-center items-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {loading ? ('Processando...') : (text)}
    </button>
  );
};

export default HandleStripePayment;
