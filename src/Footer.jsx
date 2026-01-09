import { Container } from 'react-bootstrap';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-sec text-light text-center py-3">
      <Container>

        {/* Logo */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src="/images/m-logo.png"
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>

        {/* Location and Contact */}
        <p className="mb-2">Located in Calgary, AB from Colombia with love</p>
        <p className="mb-4">+1 (403) 714-6577</p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/felipemora69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-mora92/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/felipemora69/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="small">
          © {new Date().getFullYear()} All rights reserved, trojan69 Design.
          <br />
          Making the complex simple.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;