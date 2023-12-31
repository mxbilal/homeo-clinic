import React from "react";

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Muhammadi Homeopathic</p>
          <p>Qutba, Attock</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/appointments">Appointments</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Developer Info</h2>
          <p>Email: mxbilal0@gmail.com</p>
          <p>Phone: +923495683110</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mxbilal0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mxbilal0
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p>&copy; 2023 Clinic Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
