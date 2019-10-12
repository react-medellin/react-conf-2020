import React from 'react';
import Styles from './SignupForm.css';

const SignupForm = () => {
  const suscribeAction =
    'https://gmail.us3.list-manage.com/subscribe/post?u=65fc2d9d1e01cff1b4aaf8139&amp;id=df9d73ff4d';
  return (
    <form
      action={suscribeAction}
      method="post"
      target="_blank"
      noValidate
      className={Styles.container}
    >
      <h3 className={Styles.title}>Más información</h3>
      <label className={Styles.label} htmlFor="email">
        Inscribe tu correo para enterarte de nuetro CFP, venta de tickets y
        anuncios!
      </label>
      <input
        className={Styles.input}
        type="email"
        name="EMAIL"
        placeholder="tucorreo@gmail.com"
      />
      <input
        className={Styles.cta}
        type="submit"
        value="Inscríbete"
        name="subscribe"
      />
    </form>
  );
};

export default SignupForm;
