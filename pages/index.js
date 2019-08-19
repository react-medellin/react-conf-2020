import SignupForm from '../components/SignupForm';
import Colors from '../components/Colors';
import Typography from '../components/Typography';
import Intro from '../components/Intro';

function Home() {
  return (
    <>
      <style jsx>{`
        main {
          height: 100%;
          margin: 0 auto;
          padding-left: 25px;
          padding-right: 25px;
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color: ${Colors.indigo100};
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          height: 100%;
        }
        h1,
        p {
          margin: 0;
        }
        body,
        html,
        #__next {
          height: 100%;
        }
      `}</style>
      <main>
        <section>
          <Intro />
        </section>
        <SignupForm />
      </main>
    </>
  );
}

export default Home;
