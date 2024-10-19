import React from 'react';
import logo from '../../assets/Township.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Logo" className="mb-4 h-24 w-32" />
            <p className="text-sm">
              সারা বাংলাদেশে বিস্তৃত দক্ষতা অর্জনের মাধ্যমে নিজেকে গড়ার অন্যতোম ট্রেনিং ইনস্টিটিউট ফিউচার আইটি।
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-orange-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Corporate Office:</strong> Rupayan Trade Centre (Level-17) <br /> Bangla Motor, Dhaka
              </li>
              <li>
                <strong>Head Office:</strong> Razzak Plaza (Level-3) <br /> Boikali, Khulna
              </li>
              <li>
                <strong>Uttara Branch:</strong> House - 88 (Level-3) <br /> Boikali, Khulna
              </li>
            </ul>
          </div>

          {/* Other Links */}
          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
          <p>Copyright @  Township Online Seba</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
