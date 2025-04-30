import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-primary text-white py-8">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-accent">About Me</h3>
        <p className="text-sm text-gray-300">
        I'm Syahrul Amri, a fresh graduate in Informatics Engineering with a passion for technology, writing, and impactful digital innovation.
         Experienced in web development, SEO content writing, and project administration, I thrive in both creative and analytical environments.
          Let’s connect and collaborate to bring ideas into meaningful results.
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
          Address: Jakarta, Indonesia
        </p>
        <div className="flex justify-center md:justify-start mt-4 space-x-4">
          <a
            href="https://linkedin.com/in/syahrul-amri-1b8338197"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/syahrulamri11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/syahrulamrii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent text-2xl transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/syahrul11_amri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent text-2xl transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
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
