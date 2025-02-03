import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
    
  return (
    <footer className="w-full py-8 px-4 border-t bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p className="text-sm text-gray-400">Design, display, and elevate your creative work.</p>
        </div>

        {/* Service Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-gray-400 hover:text-white">About me</Link>
            <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
            <Link href="/project" className="text-gray-400 hover:text-white">Projects</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          </nav>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/apps" className="text-gray-400 hover:text-white">Apps</Link>
            <Link href="/developer" className="text-gray-400 hover:text-white">Developer</Link>
            <Link href="/integration" className="text-gray-400 hover:text-white">Integration</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white">Logo</Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
              <Mail className="h-5 w-5" /> Portfolio@gmail.co
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
              <Phone className="h-5 w-5" /> +12234578910
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Portfolio.com. All rights reserved.
      </div>
    </footer>
  );
}
