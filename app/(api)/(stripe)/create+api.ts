import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, amount } = body;
    

    if (!name || !email || !amount || isNaN(Number(amount))) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    let customer;
    const existingCustomers = await stripe.customers.list({ email });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
      // Optionally update customer info if needed
      // await stripe.customers.update(customer.id, { name });
    } else {
      customer = await stripe.customers.create({ name, email });
    }

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2024-06-20" }
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100),
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    return new Response(
      JSON.stringify({
        paymentIntent,
        ephemeralKey,
        customer: customer.id,
      })
    );
  } catch (error) {
    console.error('Error processing payment:', error);
    return new Response(JSON.stringify({ error: "Payment processing failed" }), {
      status: 500,
    });
  }
}