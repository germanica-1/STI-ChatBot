import React from "react";
import Navigation from "./Navigation";
import ChatBot from "./ChatBot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="sti-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            STI College Muñoz-EDSA
            <span className="block text-yellow-300">Virtual Assistant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get instant answers about admissions, programs, services, and more.
            Your 24/7 digital companion for all STI-related inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="sti-yellow text-blue-900 hover:bg-yellow-400 font-semibold px-8 py-3"
            >
              Start Chatting Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Virtual Assistant Helps You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available 24/7 to provide accurate information and guidance for
              all your STI needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-sti-blue mx-auto mb-4" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get instant answers anytime, anywhere. No waiting for office
                  hours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-sti-blue mx-auto mb-4" />
                <CardTitle>Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Information about programs, schedules, requirements, and
                  academic services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-sti-blue mx-auto mb-4" />
                <CardTitle>Student Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guidance on registrar, cashier, student portal, and other
                  campus services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About STI Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About STI College Muñoz-EDSA
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                STI College Muñoz-EDSA is committed to providing quality
                education and developing globally competitive graduates. We
                offer comprehensive programs in Information Technology,
                Business, and Senior High School.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Industry-relevant curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Experienced faculty members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Modern facilities and equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Strong industry partnerships</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <div className="text-center">
                <GraduationCap className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Excellence in Education
                </h3>
                <p className="text-blue-100">
                  Preparing students for successful careers in the digital age
                  through innovative learning approaches and industry
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive range of programs designed for your
              success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-sti-blue mb-2" />
                <CardTitle>Information Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bachelor of Science in Information Technology</li>
                  <li>• Computer Programming</li>
                  <li>• Web Development</li>
                  <li>• Network Administration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-sti-blue mb-2" />
                <CardTitle>Business Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Administration</li>
                  <li>• Entrepreneurship</li>
                  <li>• Marketing Management</li>
                  <li>• Financial Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-sti-blue mb-2" />
                <CardTitle>Senior High School</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• STEM Strand</li>
                  <li>• ABM Strand</li>
                  <li>• ICT Strand</li>
                  <li>• GAS Strand</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Visit us or contact our offices for more information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-sti-blue" />
                  <span>Campus Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  STI College Muñoz-EDSA
                  <br />
                  Muñoz-EDSA, Quezon City
                  <br />
                  Metro Manila, Philippines
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-sti-blue" />
                    <span>(02) 8XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-sti-blue" />
                    <span>info@sti.edu.ph</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <Star className="h-4 w-4 inline text-yellow-500 mr-1" />
                    Our Virtual Assistant is available 24/7 for your
                    convenience!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sti-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GraduationCap className="h-8 w-8" />
            <div>
              <div className="font-bold text-lg">STI College Muñoz-EDSA</div>
              <div className="text-sm opacity-90">Virtual Assistant</div>
            </div>
          </div>
          <p className="text-sm opacity-75">
            © 2025 STI College Muñoz-EDSA. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chatbot Component */}
      <ChatBot />
    </div>
  );
}

export default Home;
