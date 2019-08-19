import React from 'react';
import Styles from './SignupForm.css';

const SignupForm = () => (
  <form className={Styles.container}>
    <label className={Styles.label} htmlFor="email">
      Inscribe tu correo para enterarte de nuetro CFP, venta de tickets y
      anuncios!
    </label>
    <input
      className={Styles.input}
      type="email"
      id="email"
      placeholder="tucorreo@gmail.com"
    />

    <input className={Styles.cta} type="submit" value="Inscríbete" />
  </form>
);

export default SignupForm;
