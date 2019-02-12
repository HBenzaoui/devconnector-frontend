import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white mt-5 p-4 text-center"
      style={{ background: '#000' }}
    >
      Made with{' '}
      <span role="img" aria-label="Labtop emoji">
        💻
      </span>{' '}
      by{' '}
      <a
        href="https://github.com/HBenzaoui"
        target="_blank"
        rel="noopener noreferrer"
      >
        @HBenzasoui
      </a>
    </footer>
  );
};

export default Footer;
