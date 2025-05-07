import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg mb-4">About RecoveryRx</h3>
            <p className="text-white text-xs mb-4">
              RecoveryRx is a digital health platform dedicated to improving medication adherence
              and healthcare outcomes through innovative technology solutions.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-xs">
              <p className="text-white">123 Healthcare Ave</p>
              <p className="text-white">Suite 456</p>
              <p className="text-white">New York, NY 10001</p>
              <p className="text-white">Phone: (555) 123-4567</p>
              <p className="text-white">Email: info@recoveryrx.com</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-white hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg mb-4">Newsletter</h3>
            <p className="text-white text-xs mb-4">
              Subscribe to our newsletter for the latest updates and health tips.
            </p>
            <form className="space-y-4 text-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-[#6e573b] hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8">
          <p className="text-center text-xs text-white">
            © {new Date().getFullYear()} RecoveryRx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
