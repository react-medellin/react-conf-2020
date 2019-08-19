import SignupForm from '../components/SignupForm';
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
