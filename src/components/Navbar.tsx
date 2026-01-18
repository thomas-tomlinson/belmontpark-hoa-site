import Link from 'next/link';

const Navbar = () => {
    const navLinks = [
    { name: 'Home', path: '/'},
    { name: 'Minutes', path: '/minutes'},
    { name: 'Calendar', path: '/calendar'},
    { name: 'Newsletter', path: '/newsletter'},
    { name: 'Dues', path: '/dues'},
    { name: 'CCRs & Bylaws', path: '/ccrs-bylaws'},
    { name: 'Forms', path: '/forms'},
    { name: 'Board', path: '/board'},
    { name: 'Contact', path: '/contact'}
    ]
    return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Belmontpark HOA
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/minutes" className="text-gray-300 hover:text-white">
              Meeting Minutes
            </Link>
          </li>
          <li>
            <Link href="/calendar" className="text-gray-300 hover:text-white">
              Calendar
            </Link>
          </li>
          <li>
            <Link href="/newsletter" className="text-gray-300 hover:text-white">
              Newsletter
            </Link>
          </li>
          <li>
            <Link href="/dues" className="text-gray-300 hover:text-white">
              Dues
            </Link>
          </li>
          <li>
            <Link href="/ccr-bylaws" className="text-gray-300 hover:text-white">
              CCRs & Bylaws
            </Link>
          </li>
          <li>
            <Link href="/forms" className="text-gray-300 hover:text-white">
              Forms
            </Link>
          </li>
          <li>
            <Link href="/board" className="text-gray-300 hover:text-white">
              Board
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
