import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-youth-dark-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-youth-purple">Youth Empire</h3>
            <p className="text-gray-300">
              Empowering youth globally through mentorship, opportunities, and guidance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-youth-purple transition-colors">Home</Link></li>
              <li><Link to="/id-card" className="text-gray-300 hover:text-youth-purple transition-colors">ID Card</Link></li>
              <li><Link to="/highlights" className="text-gray-300 hover:text-youth-purple transition-colors">Highlights</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-youth-purple transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#guidance" className="text-gray-300 hover:text-youth-purple transition-colors">Guidance & Mentorship</Link></li>
              <li><Link to="/services#internship" className="text-gray-300 hover:text-youth-purple transition-colors">Internship</Link></li>
              <li><Link to="/services#podcast" className="text-gray-300 hover:text-youth-purple transition-colors">Podcast</Link></li>
              <li><Link to="/services#life-lab" className="text-gray-300 hover:text-youth-purple transition-colors">Life Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-youth-purple transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-youth-purple transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-youth-purple transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-youth-purple transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="mt-4 text-gray-300">
              Email: contact@youthempire.org
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <a
            href="https://wa.me/message/UDZ5KXII2XDAM1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"          >
            <FaWhatsapp size={30} />
          </a>
          <p>&copy; {new Date().getFullYear()} Youth Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
