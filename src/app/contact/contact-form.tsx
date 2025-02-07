"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Phone, Mail, MapPin, ArrowLeft, Send, MessageSquare } from "lucide-react"
import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const ContactForm2: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "phoneNumber" && !/^[0-9]{0,10}$/.test(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", phoneNumber: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    const formDataObj = new FormData();
    formDataObj.append("access_key", "3713da67-aee3-4682-b0fa-b88930ef1322");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
        setErrors({ name: "", phoneNumber: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please check your internet connection.");
    }
  };

  return (
   
    
       <motion.div
    initial={{ opacity: 0, y: 20 }} // Fade in & slide up
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="min-h-screen bg-[#e6f7f7] dark:bg-gray-900 p-6"
  >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h1>
          <p className="text-gray-600 dark:text-white  max-w-2xl mx-auto">
            Let’s create something amazing together! Reach out for creative, modern 
            design solutions that make an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-[#8aede0] dark:bg-[#1b3f3d]  text-[#1b3f3d] dark:text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="mb-8">Bringing Ideas to Life with Bold & Creative Design.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <p>+1234567890</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <p>hello@stuburndesign.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5" />
                  <p>India</p>
                </div>
              </div>
            </div>
              {/* Social Media Links */}
           <div className="flex gap-4 mt-12">
                <Link href="https://instagram.com" className="hover:opacity-80">
                  <FaInstagramSquare className="h-7 w-7" />
                </Link>
                <Link href="https://linkedin.com" className="hover:opacity-80">
                  <FaLinkedin  className="h-7 w-7" />
                </Link>
                <Link href="https://wa.me/1234567890" className="hover:opacity-80">
                  <FaWhatsappSquare className="h-7 w-7" />
                </Link>
              </div>
          </Card>
         
            

          <Card className="bg-white dark:bg-[#1b3f3d] dark:text-white p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              <Input name="phoneNumber" type="tel" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
              <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              <Textarea name="message" placeholder="Write here your message" value={formData.message} onChange={handleChange} />
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              <div className="flex items-center gap-36 pt-6">
                <Button variant="outline" type="button" className="gap-2"
                onClick={() => router.back()}>
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
                <Button type="submit" className="bg-[#8aede0] dark:bg-black text-[#1b3f3d] dark:text-white gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      </motion.div>
    
  );
};

export default ContactForm2;
