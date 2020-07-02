const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_HIFh4p9c2u4fRYglfIYRjjz400hPPME2Eh';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

// test secret key: sk_test_1egyr5650f0KEEiy8gSJg4Qa00DsC2rDog

/* Rushali Account*/

// test secret key : sk_test_HIFh4p9c2u4fRYglfIYRjjz400hPPME2Eh