import Styles from './Intro.css';

const Intro = () => (
  <section className={Styles.container}>
    <h1 className={Styles.title}>React La Conferencia</h1>
    <h2 className={Styles.subTitle}>
      La primera conferencia sobre React y su ecosistema para hispanoparlantes
      en América
    </h2>
  </section>
);

export default Intro;
