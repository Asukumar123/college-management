export default function AuthForm() {
  // Component logic
const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = type === 'login' ? '/api/auth/login' : '/api/auth/signup';
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name: type === 'signup' ? name : undefined }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert(`${type === 'login' ? 'Logged in' : 'Signed up'} successfully!`);
      if (type === 'login') {
        localStorage.setItem('token', data.token); // Store JWT for authenticated requests
      }
    } else {
      alert(`Error: ${data.error}`);
    }
  };
}
