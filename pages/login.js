import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

const Login = () => (
  <div>
    <Navbar />
    <div className="container">
      <AuthForm type="login" />
    </div>
    <Footer />
  </div>
);

export default Login;
