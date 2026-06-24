"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import NavigationMenu  from "@/components/ui/navigation-menu";
import Button  from "@/components/ui/button";
import Footer from "../Footer/Page";
import { TopNavBar } from "../Landing/Page";

const EdgeGlow = ({ position, color }) => (
  <div 
    className={`absolute w-96 h-96 sm:w-96 sm:h-96 w-48 h-48 rounded-full blur-3xl ${
      position === 'top-left' ? 'top-0 left-0 -translate-x-1/2 -translate-y-1/2' :
      position === 'top-right' ? 'top-0 right-0 translate-x-1/2 -translate-y-1/2' :
      position === 'bottom-left' ? 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2' :
      'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
    }`}
    style={{ backgroundColor: color }}
  />
);

const BackgroundRippleEffect = ({ className }) => (
  <div className={`absolute inset-0 ${className}`}>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-white/10"
        style={{
          width: `${200 + i * 100}px`,
          height: `${200 + i * 100}px`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);



const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } 
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop us a line anytime",
      contact: "info.adquora@gmail.com",
      link: "mailto:info.adquora@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for immediate support",
      contact: "+91 8826899779",
      link: "tel:+918826899779"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our headquarters",
      contact: "Gurugram, Haryana 122001",
      link: "#"
    }
  ];

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full bg-[#070B11] min-h-screen flex flex-col font-sans">
      <TopNavBar />

      <section className="relative w-full flex-grow text-white overflow-hidden pt-32 pb-16">
        
        {/* Noise filter */}
      <div className="absolute inset-0 opacity-[0.015] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Intense Core Glow behind the contact form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[120%] bg-blue-600/10 blur-[150px] rounded-[100%] pointer-events-none z-0" />


      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 py-12 xs:py-16 sm:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-4 sm:mb-6 text-white"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light">connect.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs xs:text-sm sm:text-xl text-white max-w-2xl mx-auto leading-relaxed px-2 xs:px-4 sm:px-0"
          >
            Ready to transform your digital presence? Let's discuss how we can help you achieve your goals with our <span className="text-blue-400 font-semibold">innovative solutions</span>.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 sm:gap-16 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] blur-xl" />
            <div className="relative bg-[#111A2C]/40 backdrop-blur-2xl rounded-[2rem] p-6 xs:p-8 sm:p-10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tight mb-4 xs:mb-6 sm:mb-8 text-white">
                Send us a message
              </h2>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 sm:mb-6 mb-4 p-4 sm:p-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 sm:w-5 sm:h-5 w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm sm:text-base">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {/* {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 sm:mb-6 mb-4 p-4 sm:p-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 sm:w-5 sm:h-5 w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm sm:text-base">Failed to send message. Please try again.</span>
                </motion.div>
              )} */}

              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs xs:text-sm font-medium text-gray-400 mb-1 xs:mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#070B11]/50 border border-white/5 rounded-xl focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder-gray-600 text-sm"
                      placeholder="Your Full Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm font-medium text-gray-400 mb-1 xs:mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#070B11]/50 border border-white/5 rounded-xl focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder-gray-600 text-sm"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs xs:text-sm font-medium text-gray-400 mb-1 xs:mb-2">
                    Company (Optional)
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#070B11]/50 border border-white/5 rounded-xl focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder-gray-600 text-sm"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-xs xs:text-sm font-medium text-gray-400 mb-1 xs:mb-2">
                    Subject *
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#070B11]/50 border border-white/5 rounded-xl focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder-gray-600 text-sm"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs xs:text-sm font-medium text-gray-400 mb-1 xs:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#070B11]/50 border border-white/5 rounded-xl focus:border-blue-500/50 focus:bg-blue-500/[0.02] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-white placeholder-gray-600 resize-none text-sm"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 sm:px-8 sm:py-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 sm:w-5 sm:h-5 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 sm:w-5 sm:h-5 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8 sm:space-y-8 space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-3xl text-xl font-bold mb-6 sm:mb-6 mb-4 text-blue-400">
                Let's Connect
              </h2>
              <p className="text-white text-xs xs:text-sm sm:text-lg leading-relaxed">
                We're here to help you achieve your digital goals. Whether you need <span className="text-blue-400 font-semibold">digital marketing</span>, web design, or strategic consulting, our team is ready to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-6 space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="block group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl group-hover:bg-blue-500/10 transition-all duration-500" />
                    <div className="relative bg-[#111A2C]/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-6 p-4 border border-white/10 group-hover:border-blue-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-500 group-hover:-translate-y-1">
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-blue-400/50 to-transparent transition-colors duration-500" />
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#070B11] border border-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm xs:text-lg sm:text-xl font-semibold text-white mb-0.5 xs:mb-1">{info.title}</h3>
                          <p className="text-gray-400 text-xs xs:text-sm mb-1 xs:mb-2">{info.description}</p>
                          <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors text-xs xs:text-sm sm:text-base">
                            {info.contact}
                          </p>
                        </div>
                        <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            
          </motion.div>
        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;