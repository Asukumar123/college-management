import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/colleges">Colleges</Link></li>
    </ul>
    <style jsx>{`
      nav {
        padding: 10px;
        background: #0070f3;
        color: white;
      }
      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        margin-right: 20px;
      }
    `}</style>
  </nav>
);

export default Navbar;
