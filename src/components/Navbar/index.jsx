const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Products", href: "/products" },
    { id: 3, name: "About", href: "/about" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-white">
          <img
            alt="tokopedia-logo"
            src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
          />
        </div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="text-white hover:text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
