import React,{useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { authGoogle } from '../../utils/authentication/auth'

loadStripe(process.env.NEXT_STRIPE_PUBLIC_KEY);

 function Home() {

  const handlerLogin = ()=>{
    authGoogle();
  }

  return (
    <>
      <form action="/api/POST/Stripe/reqStripePaygament" method="POST">
        <button type="submit" role="link">
          Checkout payment
        </button>
      </form>
      <form action="/api/POST/Stripe/reqStripeMonth" method="POST">
        <button type="submit" role="link">
          Checkout Month
        </button>
      </form>
      <button onClick={handlerLogin}>Login Google</button>
    </>
  )

}

export default Home;