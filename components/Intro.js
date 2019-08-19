import Colors from '../components/Colors';
import Typography from '../components/Typography';

function Intro() {
  return (
    <>
      <style jsx>
        {`
          h1 {
            ${Typography.font48};
            ${Typography.fontBlack};
            color: ${Colors.cyan800};
            margin-top: 50px;
          }
          p {
            ${Typography.fontBold};
            ${Typography.font32};
            color: ${Colors.cyan1000};
            margin-top: 24px;
          }
        `}
      </style>
      <h1>React La Conferencia</h1>
      <p>
        La primera conferencia sobre React y su ecosistema para hispanoparlantes
        en América
      </p>
    </>
  );
}

export default Intro;
