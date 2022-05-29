import React,{useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SidBar from '../../components/Sidbar';

loadStripe(process.env.NEXT_STRIPE_PUBLIC_KEY);

 function Home() {

  return (
    <>
      {/* <form action="/api/POST/Stripe/reqStripePaygament" method="POST">
        <button type="submit" role="link">
          Checkout payment
        </button>
      </form>
      <form action="/api/POST/Stripe/reqStripeMonth" method="POST">
        <button type="submit" role="link">
          Checkout Month
        </button>
      </form> */}
   <SidBar/>
    </>
  )

}

export default Home;