"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { ContactLink, CONTACT_INFO } from "../ContactInfo/ContactInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    location: "",
    time: "",
    date: "",
    timeZone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Submit to Email (via Web3Forms API asynchronously)
    try {
      const emailBody = {
        access_key: "06e8365d-6f90-4fff-a191-0f143045c3b8",
        from_name: "Sharon Diane Portfolio Contact Form",
        ...formData,
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(emailBody),
      });
    } catch (err) {
      console.error("Email submission failed", err);
    }

    // 2. Submit to WhatsApp (Redirect with pre-filled text query)
    const waText = `Hello Sharon, I would like to schedule an introductory call.
*Name:* ${formData.fullname}
*Email:* ${formData.email}
*Phone:* ${formData.mobile || "N/A"}
*Location:* ${formData.location || "N/A"}
*Preferred Time:* ${formData.time || "N/A"} (${formData.timeZone || "N/A"})
*Preferred Date:* ${formData.date || "N/A"}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/18562082465?text=${encodeURIComponent(waText)}`;
    
    // Open in a new tab to complete WhatsApp delivery
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white">
      {/* ── CTA Banner ── */}
      <div className="bg-[#c9a84c] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/cta_growth.png"
                alt="Investment portfolio growth"
                width={420}
                height={320}
                className="rounded-2xl object-cover shadow-2xl w-full max-w-md"
              />
            </div>
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-8">
                I can effectively improve the overall financial outlook of your
                Investment Portfolio!
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link
                  href="#contact"
                  className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-[15px]"
                >
                  Send a Message Now
                </Link>
                <Link
                  href="#exp"
                  className="inline-flex items-center gap-2 text-black font-semibold text-[15px] hover:text-white transition-colors"
                >
                  Back to Experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left info */}
            <div className="flex-[0_0_auto] lg:w-80">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Contact Me</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let&apos;s Discuss<br />Business</h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                Kindly select your preferred Time &amp; Date indicated in the form
                to schedule an introductory call. I can help assess your financial
                status, understand your financial goals and create a tailored
                financial plan to achieve those goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-full bg-[#c9a84c]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                    <ContactLink type="email" className="text-gray-800 font-semibold text-sm block" />
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-full bg-[#c9a84c]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                    <ContactLink type="phone" className="text-gray-800 font-semibold text-sm block" />
                  </div>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="flex-1">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text" name="fullname" placeholder="Your Name" required
                      value={formData.fullname} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400"
                    />
                    <input
                      type="email" name="email" placeholder="Email Address" required
                      value={formData.email} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400"
                    />
                    <input
                      type="tel" name="mobile" placeholder="Phone Number"
                      value={formData.mobile} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400"
                    />
                    <input
                      type="text" name="location" placeholder="Your Location"
                      value={formData.location} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Preferred Time</label>
                      <input
                        type="time" name="time"
                        value={formData.time} onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Preferred Date</label>
                      <input
                        type="date" name="date"
                        value={formData.date} onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Time Zone</label>
                      <input
                        type="text" name="timeZone" placeholder="e.g. EST"
                        value={formData.timeZone} onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <textarea
                    name="message" id="message" rows={5}
                    placeholder="Your Message" required
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-800 text-[15px] outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition placeholder-gray-400 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#c9a84c] hover:bg-[#a8853a] text-black font-bold py-4 rounded-full text-[16px] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
