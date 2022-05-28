import React,{useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { authGoogle } from '../../utils/authentication/auth'

loadStripe(process.env.NEXT_STRIPE_PUBLIC_KEY);

 function Home() {

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const handlerLogin = ()=>{
    authGoogle();
  }

  return (
    <>
      <form action="/api/checkout_sessions" method="POST">
        <button type="submit" role="link">
          Checkout
        </button>
      </form>
      <button onClick={handlerLogin}>Login Google</button>
    </>
  )

}

export default Home;