import { NextApiRequest, NextApiResponse } from 'next';
import stripe from '@/lib/stripe';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { testeId, product } = req.body;

    let priceId;

    if (product === 'Pro') {
      priceId = process.env.STRIPE_PRICE_ID_PRO;
    } else if (product === 'Plus') {
      priceId = process.env.STRIPE_PRICE_ID_PLUS;
    } else {
      throw new Error('Produto inválido');
    }

    if (!priceId) {
      throw new Error('ID do preço não definido para o produto');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'boleto'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/sucess`,
      cancel_url: `${req.headers.origin}/checkout`,
      metadata: {
        testeId,
      },
    });

    console.log('Sessão de checkout criada:', session.id);
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error);
    res.status(500).json({ message: 'Erro ao criar sessão de checkout', error: error });
  }
}
