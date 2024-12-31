import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

const Signup = () => (
  <div>
    <Navbar />
    <div className="container">
      <AuthForm type="signup" />
    </div>
    <Footer />
  </div>
);

export default Signup;
