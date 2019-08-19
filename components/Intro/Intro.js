import Styles from './Intro.css';

const Intro = () => (
  <section>
    <h1 className={Styles.title}>React La Conferencia</h1>
    <p className={Styles.subTitle}>
      La primera conferencia sobre React y su ecosistema para hispanoparlantes
      en América
    </p>
  </section>
);

export default Intro;
