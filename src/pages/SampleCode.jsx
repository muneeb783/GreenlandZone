import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, TrendingUp, Award, Users, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function GreenlandZone() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      category: "Dairy Farming",
      name: "Premium Cow Cubicles",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop",
      shortDesc: "Ergonomic cow cubicles designed for maximum comfort and hygiene",
      fullDesc: "Our premium cow cubicles are engineered with the latest in dairy cow comfort technology. Each cubicle features adjustable dividers, premium mattress systems, and drainage solutions that ensure optimal cow health and productivity.",
      features: ["Adjustable width settings", "Premium comfort mattress", "Easy-clean design", "Durable steel construction", "Improved cow health metrics"],
      tag: "Comfort"
    },
    {
      id: 2,
      category: "Dairy Farming",
      name: "Automated Feeding System",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      shortDesc: "State-of-the-art automated feeding for consistent nutrition delivery",
      fullDesc: "Revolutionize your feeding operations with our fully automated system. Precision mixing, scheduled delivery, and real-time monitoring ensure every cow receives optimal nutrition at the right time.",
      features: ["Precision mixing technology", "Scheduled automatic delivery", "Real-time monitoring", "Reduces labor costs", "Consistent feed quality"],
      tag: "Automation"
    },
    {
      id: 3,
      category: "Milking",
      name: "Rotary Milking Parlor",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=600&fit=crop",
      shortDesc: "High-efficiency rotary milking systems for large-scale operations",
      fullDesc: "Our rotary milking parlors combine speed, efficiency, and cow comfort. With capacities ranging from 40 to 80 stalls, these systems dramatically reduce milking time while maintaining the highest hygiene standards.",
      features: ["40-80 cow capacity", "Automatic cluster removal", "Individual cow recognition", "Integrated herd management", "Reduced milking time"],
      tag: "Efficiency"
    },
    {
      id: 4,
      category: "Milking",
      name: "Milk Cooling Tank",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&h=600&fit=crop",
      shortDesc: "Energy-efficient cooling systems to preserve milk quality",
      fullDesc: "Maintain optimal milk quality with our advanced cooling tanks. Energy-efficient compressors and precise temperature control ensure your milk stays fresh from farm to processor.",
      features: ["Rapid cooling technology", "Energy-efficient design", "Digital temperature control", "Easy cleaning system", "Various capacity options"],
      tag: "Quality"
    },
    {
      id: 5,
      category: "Climate Control",
      name: "Barn Ventilation System",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      shortDesc: "Advanced ventilation for optimal barn climate and cow health",
      fullDesc: "Create the perfect barn environment with our intelligent ventilation systems. Automatic sensors adjust airflow based on temperature, humidity, and air quality, ensuring cow comfort year-round.",
      features: ["Automatic climate control", "Energy-efficient fans", "Smart sensor technology", "Reduced heat stress", "Improved air quality"],
      tag: "Climate"
    },
    {
      id: 6,
      category: "Climate Control",
      name: "Misting & Cooling Systems",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      shortDesc: "High-pressure misting for heat stress reduction",
      fullDesc: "Combat heat stress with our precision misting systems. High-pressure nozzles create a fine mist that cools cows without wetting them excessively, maintaining productivity during hot months.",
      features: ["High-pressure nozzles", "Programmable timing", "Zone-specific cooling", "Water-efficient design", "Proven stress reduction"],
      tag: "Comfort"
    },
    {
      id: 7,
      category: "Forage",
      name: "Silage Harvesting Equipment",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      shortDesc: "Professional silage harvesters for optimal forage quality",
      fullDesc: "Maximize your forage quality with our precision harvesting equipment. Advanced cutting systems and processing technology ensure perfect particle size and optimal fermentation.",
      features: ["Precision cutting technology", "Adjustable chop length", "High throughput capacity", "Low fuel consumption", "Superior forage quality"],
      tag: "Harvest"
    },
    {
      id: 8,
      category: "Forage",
      name: "Feed Mixing Wagons",
      image: "https://images.unsplash.com/photo-1527631746610-ab6f4d3fc9ca?w=800&h=600&fit=crop",
      shortDesc: "Heavy-duty mixers for consistent TMR preparation",
      fullDesc: "Prepare perfect Total Mixed Rations with our robust feed mixing wagons. Vertical or horizontal configurations available, with capacities to suit any herd size.",
      features: ["Various capacity options", "Uniform mixing quality", "Digital weighing system", "Durable construction", "Easy maintenance"],
      tag: "Feeding"
    },
    {
      id: 9,
      category: "Feeding",
      name: "Calf Feeding Station",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
      shortDesc: "Automated calf feeding for optimal early development",
      fullDesc: "Give your calves the best start with our automated feeding stations. Individual calf recognition, precise milk delivery, and health monitoring ensure optimal growth and development.",
      features: ["Individual calf tracking", "Programmable feeding curves", "Health monitoring alerts", "Easy cleaning design", "Proven weight gain improvement"],
      tag: "Automation"
    },
    {
      id: 10,
      category: "Barn Equipment",
      name: "Automatic Scraper System",
      image: "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=800&h=600&fit=crop",
      shortDesc: "Automated barn cleaning for superior hygiene",
      fullDesc: "Maintain impeccable barn hygiene with minimal labor. Our automated scraper systems run on programmable schedules, keeping alleys clean and reducing disease pressure.",
      features: ["Programmable cleaning cycles", "Low maintenance design", "Quiet operation", "Reduces labor costs", "Improved barn hygiene"],
      tag: "Hygiene"
    },
    {
      id: 11,
      category: "Barn Equipment",
      name: "Water Troughs & Bowls",
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=800&h=600&fit=crop",
      shortDesc: "Fresh water access systems for optimal cow hydration",
      fullDesc: "Ensure your cows have constant access to fresh, clean water. Our troughs and bowls are designed for durability, easy cleaning, and optimal flow rates.",
      features: ["Frost-free options available", "Easy-clean design", "Optimal flow rates", "Durable construction", "Multiple size options"],
      tag: "Health"
    },
    {
      id: 12,
      category: "Barn Equipment",
      name: "LED Barn Lighting",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
      shortDesc: "Energy-efficient lighting optimized for dairy operations",
      fullDesc: "Upgrade to LED lighting designed specifically for dairy barns. Our systems provide optimal light levels for cow comfort and productivity while reducing energy costs by up to 70%.",
      features: ["70% energy savings", "Optimal light spectrum", "Long lifespan (50,000+ hours)", "Dusk-to-dawn sensors", "Improved milk production"],
      tag: "Efficiency"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Industry-leading equipment built to last, backed by rigorous testing and quality assurance"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated technical team available 24/7 to ensure your operations run smoothly"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our solutions have helped farms increase productivity by an average of 35%"
    },
    {
      icon: Sparkles,
      title: "Innovation Driven",
      description: "Constantly developing new technologies to keep you ahead of the competition"
    }
  ];

  const stats = [
    { value: "98%", label: "Cow Comfort Rating" },
    { value: "35%", label: "Average Yield Increase" },
    { value: "500+", label: "Satisfied Farms" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GZ</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Greenland Zone</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } ${currentSection === 'home' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } ${currentSection === 'about' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
              >
                About Us
              </button>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <button
                  className={`font-medium transition-colors hover:text-green-600 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${currentSection === 'products' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                >
                  Products
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                    {['Dairy Farming', 'Forage', 'Milking', 'Climate Control', 'Feeding', 'Barn Equipment'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => scrollToSection('products')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('solutions')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } ${currentSection === 'solutions' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } ${currentSection === 'contact' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
              >
                Contact Us
              </button>
            </div>

            {/* CTA Button */}
            <Button 
              className="hidden lg:flex bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              >
                Contact Us
              </button>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Innovative Solutions for<br />
            <span className="text-green-500">Modern Dairy Farming</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Transform your dairy operation with cutting-edge equipment and technology designed to maximize productivity, cow comfort, and profitability
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('products')}
          >
            Explore Solutions
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-extrabold text-green-400 mb-2">{stat.value}</div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Greenland Zone?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to revolutionizing dairy farming through innovation, quality, and unwavering support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive equipment solutions for every aspect of your dairy operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      View Details
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-green-600 font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDesc}</p>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Complete Farm Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just sell equipment – we provide comprehensive solutions tailored to your farm's unique needs. From initial consultation to installation and ongoing support, our team is with you every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  'Custom farm design and layout optimization',
                  'Professional installation and commissioning',
                  'Comprehensive training for your team',
                  '24/7 technical support and maintenance',
                  'Performance monitoring and optimization',
                  'Financing options available'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop"
                alt="Farm Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-extrabold text-green-600 mb-1">500+</div>
                <div className="text-gray-600 font-medium">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your dairy operation? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                <p className="text-gray-600 mb-2">Call us anytime</p>
                <p className="text-green-600 font-semibold">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 mb-2">Send us a message</p>
                <p className="text-green-600 font-semibold">info@greenlandzone.com</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Office</h3>
                <p className="text-gray-600 mb-2">Visit our headquarters</p>
                <p className="text-green-600 font-semibold">123 Farm Road, Green Valley</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GZ</span>
                </div>
                <span className="text-xl font-bold">Greenland Zone</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading provider of innovative dairy farming equipment and solutions, committed to helping farmers maximize productivity and profitability.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Products', 'Solutions', 'Contact Us', 'Careers'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Solutions */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Solutions</h3>
              <ul className="space-y-3">
                {['Dairy Farming Equipment', 'Milking Systems', 'Feeding Solutions', 'Climate Control', 'Barn Equipment', 'Forage Solutions'].map((solution) => (
                  <li key={solution}>
                    <button 
                      onClick={() => scrollToSection('products')}
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      {solution}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      123 Farm Road<br />
                      Green Valley, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-400">info@greenlandzone.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Greenland Zone. All rights reserved. | Designed with care for dairy farmers worldwide
            </p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </DialogTitle>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-green-600 font-semibold">{selectedProduct.category}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedProduct.tag}
                  </span>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                  {selectedProduct.fullDesc}
                </DialogDescription>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      setSelectedProduct(null);
                      scrollToSection('contact');
                    }}
                  >
                    Request a Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}