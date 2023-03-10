import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MLG8PKAsnetFmqL9XLIvh3EiaCFM9j6dGD4Epy3yLrSNQfFygGbSeDyLuBLKquAVIBvqKrgPadTfn2sPFFATnue00HGOKryd2'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
