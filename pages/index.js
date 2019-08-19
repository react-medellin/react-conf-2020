import SignupForm from '../components/SignupForm';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <main style={{ height: '100%', minHeight: '100%' }}>
      <Intro />
      <SignupForm />
    </main>
    <Footer />
  </>
);

export default Home;
