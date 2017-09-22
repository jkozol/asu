const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_59xq0OFS8MXv9M6fLlGpS2Qu'
  : 'pk_test_MY_PUBLISHABLE_KEY';

export default STRIPE_PUBLISHABLE;
