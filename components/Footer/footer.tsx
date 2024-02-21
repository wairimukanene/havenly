import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Store Location</a></li>
              <li><a href="#">Shipping Zones and Rates</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Customer Care</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Storage Duration Policy</a></li>
              <li><a href="#">Easy Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Stay Connected</h2>
            <p>Sign up for exclusive updates & new arrivals</p>
            <input type="email" placeholder="Enter your email address" className="mt-2 p-2 w-full"/>
            <button className="mt-2 p-2 w-full bg-blue-500 text-white">Subscribe</button>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FaTiktok className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
