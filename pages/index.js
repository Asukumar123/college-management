import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <div className="container">
      <h1>Welcome to College Management</h1>
      <p>Explore colleges, courses, and placement data!</p>
      <button
        onClick={() => (window.location.href = '/colleges')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Get Started
      </button>
    </div>
    <Footer />
  </div>
);

export default Home;
