"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Image from "next/image";


export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-white rounded-[32px] overflow-hidden">
      {/* Form Section */}
      <div className="p-8 lg:p-12">
        <div className="space-y-6 max-w-md">
          <div>
            <h1 className="text-3xl font-bold mb-3">We&apos;d love to help</h1>
            <p className="text-gray-500">
              We&apos;re a full service agency with experts ready to help. We&apos;ll get in touch within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <div className="flex gap-2">
                <select className="flex h-10 w-[90px] rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>US</option>
                  <option>UK</option>
                  <option>CA</option>
                </select>
                <Input id="phone" type="tel" placeholder="+1 1234 000-0000" className="flex-1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Leave us a message..." className="min-h-[120px] resize-none" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <label
                htmlFor="privacy"
                className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                You agree to our friendly{" "}
                <a href="#" className="text-black underline">
                  privacy policy
                </a>
                .
              </label>
            </div>

            <Button className="w-full bg-black hover:bg-gray-800" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative hidden lg:block bg-black">
        <Image
          src="/images/f6.jpg"
          alt="Abstract prismatic effect"
          width={400}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="text-lg mb-6">
          </blockquote>
          
          
        </div>
      </div>
    </div>
  )
}

