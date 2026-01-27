import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#7D1230] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">University of Vavuniya</h3>
            <p className="text-sm text-gray-300 mb-2">
              Pampaimadu, Vavuniya, Sri Lanka
            </p>
            <p className="text-sm text-gray-300">info@vavuc.lk</p>
            <p className="text-sm text-gray-300">+94 24 222 2265</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Student Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Welfare Division</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900 mt-8 pt-6 text-center text-sm text-gray-300">
          © 2023 University of Vavuniya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
