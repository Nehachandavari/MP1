import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get the App */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get the app</h2>
            <div className="flex space-x-4">
              <img src="google-play-icon.png" alt="Google Play" className="h-10" />
              <img src="app-store-icon.png" alt="App Store" className="h-10" />
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <p>In case of queries, send us an e-mail on <a href="mailto:support@iMumz.com" className="underline">support@iMumz.com</a> or reach on WhatsApp at +91-9606009560</p>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p>No. 06, Vedanta Block, Axis Tatvam, Udaypura, Bengaluru, Karnataka, INDIA. 560082</p>
          </div>

          {/* Policies */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Policies</h2>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
              <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-8">
          <a href="#" className="mr-4"><img src="https://www.flaticon.com/free-icon/instagram_2111491" alt="Instagram" className="h-8" /></a>
          <a href="#" className="mr-4"><img src="https://www.flaticon.com/free-icon/linkedin_1384088" alt="LinkedIn" className="h-8" /></a>
          <a href="#" className="mr-4"><img src="https://www.flaticon.com/free-icon/youtube_1077046" alt="YouTube" className="h-8" /></a>
          <a href="#" className="mr-4"><img src="https://cdn-icons-png.flaticon.com/128/665/665209.png" alt="Facebook" className="h-8" /></a>
          <a href="#" className="mr-4"><img src="https://www.flaticon.com/free-icon/twitter-sign_25347" alt="Twitter" className="h-8" /></a>
          <a href="#" className="mr-4"><img src="https://www.flaticon.com/free-icon/pinterest_15527810" alt="Pinterest" className="h-8" /></a>
        </div>
      </div>
      
      {/* Company Info */}
      <div className="mt-8 text-center">
        <p>© 2022 Pruoo Healthcare Technologies Private Limited</p>
        <p>CIN: U85300KA2020PTC140653</p>
      </div>
    </footer>
  );
}

export default Footer;
