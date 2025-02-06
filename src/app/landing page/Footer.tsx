"use client";

import {Mail, Phone, MapPin } from "lucide-react"
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LuMail } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/project" },
    { name: "Contact me", href: "/contact" },
  ];

  const socials = [
    { icon: IoLogoFacebook, label: "Facebook", url: "https://facebook.com" },
    { icon: FaWhatsappSquare, label: "Whatsapp", url: "https://Whatsapp.com" },
    { icon: FaInstagramSquare , label: "Instagram", url: "https://instagram.com" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
        <footer className="bg-zinc-900 text-zinc-100">
        <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div className="space-y-2">
              <div className="h-auto max-h-[190px] overflow-hidden">
                <Image
                  src="/images/logo/brand-logo.png"
                  alt="Stuburn Design Logo"
                  width={200}
                  height={60}
                  className="h-auto max-h-[190px] w-auto invert"
                />
              </div>
              <p className="text-zinc-400 mt-4">
                Creating distinctive designs that leave a lasting impression.
              </p>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
              <li key={link.name}>
            <Link href={link.href} className="text-zinc-400 hover:text-teal-500 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-zinc-400">
                <LuMail  className="h-5 w-5" />
                <a href="mailto:hello@stuburn.design" className="hover:text-teal-500 transition-colors">
                  hello@stuburn.design
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <FiPhone className="h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-teal-500 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <SlLocationPin  className="h-5 w-5" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4">
        {socials.map(({ icon: Icon, label, url }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 p-2 rounded-full hover:bg-teal-500 transition-colors"
            aria-label={label}
          >
            <Icon className="h-6 w-6 text-white" />
          </Link>
        ))}
      </div>
    </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Stuburn Design. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-zinc-400 hover:text-teal-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-teal-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

