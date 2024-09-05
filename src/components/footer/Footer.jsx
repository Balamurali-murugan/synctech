// components/footer/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-primary-foreground p-2 shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} SyncTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
