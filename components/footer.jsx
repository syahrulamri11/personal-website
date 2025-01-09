const Footer = () => (
  <footer className="bg-primary text-white py-8">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-accent">About Me</h3>
        <p className="text-sm text-gray-300">
          I'm Syahrul Amri, a tech enthusiast with a passion for sports, history, and creating impactful digital projects. Connect with me to collaborate or learn more about my work.
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/articles"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/syahrulamri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-accent">Contact</h3>
        <p className="text-sm text-gray-300">Email: syahrulamri1102@gmail.com</p>
        <p className="text-sm text-gray-300">Phone: +62 831-4305-2787</p>
        <p className="text-sm text-gray-300">
          Address: Sumbawa, Indonesia
        </p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} Syahrul Amri. All Rights Reserved.
      </p>
      <p>Powered by Next.js & Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
